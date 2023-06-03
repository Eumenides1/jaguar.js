import {
  CLIENT_ENTRY_PATH,
  DEFAULT_HTML_PATH,
  PACKAGE_ROOT,
  pluginConfig
} from "./chunk-E26JCFVC.mjs";
import {
  resolveConfig
} from "./chunk-XICRIFJC.mjs";

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
async function createDevServer(root, restart) {
  const config = await resolveConfig(root, "serve", "development");
  console.log(config);
  return createServer({
    root: PACKAGE_ROOT,
    plugins: [pluginIndexHtml(), pluginReact(), pluginConfig(config, restart)],
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
