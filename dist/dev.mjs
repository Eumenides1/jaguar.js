import {
  CLIENT_ENTRY_PATH,
  DEFAULT_HTML_PATH,
  PACKAGE_ROOT,
  pluginConfig
} from "./chunk-7NKOWZKI.mjs";
import {
  resolveConfig
} from "./chunk-2MN52ALU.mjs";

// src/node/dev.ts
import { createServer } from "vite";

// src/node/plugin-jaguar/indexHtml.ts
import { readFile } from "fs/promises";
function pluginIndexHtml() {
  return {
    name: "jaguar:index-html",
    apply: "serve",
    // 插入入口 script 标签
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              type: "module",
              src: `/@fs/${CLIENT_ENTRY_PATH}`
            },
            injectTo: "body"
          }
        ]
      };
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await readFile(DEFAULT_HTML_PATH, "utf-8");
          try {
            html = await server.transformIndexHtml(
              req.url,
              html,
              req.originalUrl
            );
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(html);
          } catch (e) {
            return next(e);
          }
        });
      };
    }
  };
}

// src/node/dev.ts
import pluginReact from "@vitejs/plugin-react";

// src/node/plugin-routes/RouteService.ts
import fastGlob from "fast-glob";
import { normalizePath } from "vite";
import path from "path";
var RouteService = class {
  #scanDir;
  #routeData = [];
  constructor(scanDir) {
    this.#scanDir = scanDir;
  }
  async init() {
    const files = fastGlob.sync(["**/*.{js,jsx,ts,tsx,md,mdx}"], {
      cwd: this.#scanDir,
      absolute: true,
      ignore: ["**/node_modules/**", "**/build/**", "config.ts"]
    }).sort();
    files.forEach((file) => {
      const fileRelativePath = normalizePath(
        path.relative(this.#scanDir, file)
      );
      const routePath = this.normalizeRoutePath(fileRelativePath);
      this.#routeData.push({
        routePath,
        absolutePath: file
      });
    });
  }
  // 获取路由数据，方便测试
  getRouteMeta() {
    return this.#routeData;
  }
  normalizeRoutePath(rawPath) {
    const routePath = rawPath.replace(/\.(.*)?$/, "").replace(/index$/, "");
    return routePath.startsWith("/") ? routePath : `/${routePath}`;
  }
  generateRoutesCode() {
    return `
  import React from 'react';
  import loadable from '@loadable/component';
  ${this.#routeData.map((route, index) => {
      return `const Route${index} = loadable(() => import('${route.absolutePath}'));`;
    }).join("\n")}
  export const routes = [
  ${this.#routeData.map((route, index) => {
      return `{ path: '${route.routePath}', element: React.createElement(Route${index}) }`;
    }).join(",\n")}
  ];
  `;
  }
};

// src/node/plugin-routes/index.ts
var CONVENTIONAL_ROUTE_ID = "jaguar:routes";
function pluginRoutes(options) {
  const routeService = new RouteService(options.root);
  return {
    name: "jaguar:routes",
    async configResolved() {
      await routeService.init();
    },
    resolveId(id) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return "\0" + id;
      }
    },
    load(id) {
      if (id === "\0" + CONVENTIONAL_ROUTE_ID) {
        return routeService.generateRoutesCode();
      }
    }
  };
}

// src/node/dev.ts
async function createDevServer(root, restartServer) {
  const config = await resolveConfig(root, "serve", "development");
  console.log(config);
  return createServer({
    root: PACKAGE_ROOT,
    plugins: [
      pluginIndexHtml(),
      pluginReact({
        jsxRuntime: "automatic"
      }),
      pluginConfig(config, restartServer),
      pluginRoutes({
        root: config.root
      })
    ],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  });
}
export {
  createDevServer
};
