"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevServer = void 0;
const vite_1 = require("vite");
const indexHtml_1 = require("./plugin-jaguar/indexHtml");
function createDevServer(root) {
    return (0, vite_1.createServer)({
        root,
        plugins: [(0, indexHtml_1.pluginIndexHtml)()]
    });
}
exports.createDevServer = createDevServer;
