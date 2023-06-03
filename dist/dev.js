"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }




var _chunkMCJ6EW4Ljs = require('./chunk-MCJ6EW4L.js');


var _chunk54BAVARBjs = require('./chunk-54BAVARB.js');

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
              src: `/@fs/${_chunkMCJ6EW4Ljs.CLIENT_ENTRY_PATH}`
            },
            injectTo: "body"
          }
        ]
      };
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await _promises.readFile.call(void 0, _chunkMCJ6EW4Ljs.DEFAULT_HTML_PATH, "utf-8");
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
async function createDevServer(root, restart) {
  const config = await _chunk54BAVARBjs.resolveConfig.call(void 0, root, "serve", "development");
  console.log(config);
  return _vite.createServer.call(void 0, {
    root: _chunkMCJ6EW4Ljs.PACKAGE_ROOT,
    plugins: [pluginIndexHtml(), _pluginreact2.default.call(void 0, ), _chunkMCJ6EW4Ljs.pluginConfig.call(void 0, config, restart)],
    server: {
      fs: {
        allow: [_chunkMCJ6EW4Ljs.PACKAGE_ROOT]
      }
    }
  });
}


exports.createDevServer = createDevServer;
