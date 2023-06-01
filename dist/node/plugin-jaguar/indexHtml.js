"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginIndexHtml = void 0;
const promises_1 = require("fs/promises");
const constants_1 = require("../constants");
function pluginIndexHtml() {
    return {
        name: "island:index-html",
        apply: "serve",
        configureServer(server) {
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    let html = await (0, promises_1.readFile)(constants_1.DEFAULT_HTML_PATH, "utf-8");
                    try {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "text/html");
                        res.end(html);
                    }
                    catch (e) {
                        return next(e);
                    }
                });
            };
        },
    };
}
exports.pluginIndexHtml = pluginIndexHtml;
