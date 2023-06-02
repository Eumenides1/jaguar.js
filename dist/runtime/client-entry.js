"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const app_1 = require("./app");
function renderInBrowser() {
    const containerEl = document.getElementById("root");
    if (!containerEl) {
        throw new Error("#root element not found");
    }
    (0, client_1.createRoot)(containerEl).render((0, jsx_runtime_1.jsx)(app_1.App, {}));
}
renderInBrowser();
