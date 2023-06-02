"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("./app");
const server_1 = require("react-dom/server");
// For ssr component render
function render() {
    return (0, server_1.renderToString)((0, jsx_runtime_1.jsx)(app_1.App, {}));
}
exports.render = render;
