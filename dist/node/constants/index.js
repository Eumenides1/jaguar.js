"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_ENTRY_PATH = exports.DEFAULT_HTML_PATH = exports.PACKAGE_ROOT = void 0;
const path_1 = require("path");
exports.PACKAGE_ROOT = (0, path_1.join)(__dirname, "..", "..", "..");
exports.DEFAULT_HTML_PATH = (0, path_1.join)(exports.PACKAGE_ROOT, "template.html");
exports.CLIENT_ENTRY_PATH = (0, path_1.join)(exports.PACKAGE_ROOT, "src", "runtime", "client-entry.tsx");
