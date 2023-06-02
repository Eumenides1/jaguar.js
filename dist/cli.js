"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/node/cli.ts
var _cac = require('cac'); var _cac2 = _interopRequireDefault(_cac);

// src/node/dev.ts
var _vite = require('vite');

// src/node/plugin-jaguar/indexHtml.ts
var _promises = require('fs/promises');

// src/node/constants/index.ts
var _path = require('path');
var PACKAGE_ROOT = _path.join.call(void 0, __dirname, "..");
var DEFAULT_HTML_PATH = _path.join.call(void 0, PACKAGE_ROOT, "template.html");
var CLIENT_ENTRY_PATH = _path.join.call(void 0, 
  PACKAGE_ROOT,
  "src",
  "runtime",
  "client-entry.tsx"
);
var SERVER_ENTRY_PATH = _path.join.call(void 0, 
  PACKAGE_ROOT,
  "src",
  "runtime",
  "ssr-entry.tsx"
);

// src/node/plugin-jaguar/indexHtml.ts
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
          let html = await _promises.readFile.call(void 0, DEFAULT_HTML_PATH, "utf-8");
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
function createDevServer(root) {
  return _vite.createServer.call(void 0, {
    root,
    plugins: [pluginIndexHtml(), _pluginreact2.default.call(void 0, )]
  });
}

// src/node/build.ts


var _fsextra = require('fs-extra'); var _fsextra2 = _interopRequireDefault(_fsextra);
async function bundle(root) {
  const resolveViteConfig = (isServer) => ({
    mode: "production",
    root,
    build: {
      ssr: isServer,
      outDir: isServer ? ".temp" : "build",
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? "cjs" : "esm"
        }
      }
    }
  });
  console.log("Building client + server bundles...");
  try {
    const [clientBundle, serverBundle] = await Promise.all([
      // client build
      _vite.build.call(void 0, resolveViteConfig(false)),
      // server build
      _vite.build.call(void 0, resolveViteConfig(true))
    ]);
    return [clientBundle, serverBundle];
  } catch (e) {
    console.log(e);
  }
}
async function renderPage(render, root, clientBundle) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === "chunk" && chunk.isEntry
  );
  console.log("Rendering page in server side...");
  const appHtml = render();
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>title</title>
      <meta name="description" content="xxx">
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script type="module" src="/${_optionalChain([clientChunk, 'optionalAccess', _ => _.fileName])}"></script>
    </body>
  </html>`.trim();
  await _fsextra2.default.ensureDir(_path.join.call(void 0, root, "build"));
  await _fsextra2.default.writeFile(_path.join.call(void 0, root, "build/index.html"), html);
  await _fsextra2.default.remove(_path.join.call(void 0, root, ".temp"));
}
async function build(root = process.cwd()) {
  const [clientBundle] = await bundle(root);
  const serverEntryPath = _path.join.call(void 0, root, ".temp", "ssr-entry.js");
  const { render } = await Promise.resolve().then(() => _interopRequireWildcard(require(serverEntryPath)));
  await renderPage(render, root, clientBundle);
}

// src/node/cli.ts

var cli = _cac2.default.call(void 0, "jaguar").version("0.0.1").help();
cli.command("dev [root]", "start dev server").action(async (root) => {
  const server = await createDevServer(root);
  await server.listen();
  server.printUrls();
});
cli.command("build [root]", "build in production").action(async (root) => {
  try {
    root = _path.resolve.call(void 0, root);
    await build(root);
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
