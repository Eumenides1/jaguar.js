"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }




var _chunkZH5NFGPOjs = require('./chunk-ZH5NFGPO.js');


var _chunkEH4W5WKDjs = require('./chunk-EH4W5WKD.js');

// src/node/dev.ts
var _vite = require('vite');

// src/node/plugin-jaguar/indexHtml.ts
var _promises = require('fs/promises');
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
              src: `/@fs/${_chunkZH5NFGPOjs.CLIENT_ENTRY_PATH}`
            },
            injectTo: "body"
          }
        ]
      };
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await _promises.readFile.call(void 0, _chunkZH5NFGPOjs.DEFAULT_HTML_PATH, "utf-8");
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
var _pluginreact = require('@vitejs/plugin-react'); var _pluginreact2 = _interopRequireDefault(_pluginreact);

// src/node/plugin-routes/RouteService.ts
var _fastglob = require('fast-glob'); var _fastglob2 = _interopRequireDefault(_fastglob);

var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var RouteService = class {
  #scanDir;
  #routeData = [];
  constructor(scanDir) {
    this.#scanDir = scanDir;
  }
  async init() {
    const files = _fastglob2.default.sync(["**/*.{js,jsx,ts,tsx,md,mdx}"], {
      cwd: this.#scanDir,
      absolute: true,
      ignore: ["**/node_modules/**", "**/build/**", "config.ts"]
    }).sort();
    files.forEach((file) => {
      const fileRelativePath = _vite.normalizePath.call(void 0, 
        _path2.default.relative(this.#scanDir, file)
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
  const config = await _chunkEH4W5WKDjs.resolveConfig.call(void 0, root, "serve", "development");
  console.log(config);
  return _vite.createServer.call(void 0, {
    root: _chunkZH5NFGPOjs.PACKAGE_ROOT,
    plugins: [
      pluginIndexHtml(),
      _pluginreact2.default.call(void 0, {
        jsxRuntime: "automatic"
      }),
      _chunkZH5NFGPOjs.pluginConfig.call(void 0, config, restartServer),
      pluginRoutes({
        root: config.root
      })
    ],
    server: {
      fs: {
        allow: [_chunkZH5NFGPOjs.PACKAGE_ROOT]
      }
    }
  });
}


exports.createDevServer = createDevServer;
