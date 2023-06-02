"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.renderPage = exports.bundle = void 0;
const vite_1 = require("vite");
const constants_1 = require("./constants");
const path_1 = require("path");
const fs = require("fs-extra");
async function bundle(root) {
    const resolveViteConfig = (isServer) => ({
        mode: "production",
        root,
        build: {
            ssr: isServer,
            outDir: isServer ? ".temp" : "build",
            rollupOptions: {
                input: isServer ? constants_1.SERVER_ENTRY_PATH : constants_1.CLIENT_ENTRY_PATH,
                output: {
                    format: isServer ? "cjs" : "esm",
                },
            },
        },
    });
    console.log(`Building client + server bundles...`);
    try {
        const [clientBundle, serverBundle] = await Promise.all([
            // client build
            (0, vite_1.build)(resolveViteConfig(false)),
            // server build
            (0, vite_1.build)(resolveViteConfig(true)),
        ]);
        return [clientBundle, serverBundle];
    }
    catch (e) {
        console.log(e);
    }
}
exports.bundle = bundle;
async function renderPage(render, root, clientBundle) {
    const clientChunk = clientBundle.output.find((chunk) => chunk.type === "chunk" && chunk.isEntry);
    console.log(`Rendering page in server side...`);
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
      <script type="module" src="/${clientChunk?.fileName}"></script>
    </body>
  </html>`.trim();
    await fs.ensureDir((0, path_1.join)(root, "build"));
    await fs.writeFile((0, path_1.join)(root, "build/index.html"), html);
    await fs.remove((0, path_1.join)(root, ".temp"));
}
exports.renderPage = renderPage;
async function build(root = process.cwd()) {
    // 1. bundle - client 端 + server 端
    const [clientBundle] = await bundle(root);
    // 2. 引入 server-entry 模块
    const serverEntryPath = (0, path_1.join)(root, ".temp", "ssr-entry.js");
    const { render } = require(serverEntryPath);
    // 3. 服务端渲染，产出 HTML
    await renderPage(render, root, clientBundle);
}
exports.build = build;
