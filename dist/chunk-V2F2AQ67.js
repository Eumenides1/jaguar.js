"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/node/constants/index.ts
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






exports.PACKAGE_ROOT = PACKAGE_ROOT; exports.DEFAULT_HTML_PATH = DEFAULT_HTML_PATH; exports.CLIENT_ENTRY_PATH = CLIENT_ENTRY_PATH; exports.SERVER_ENTRY_PATH = SERVER_ENTRY_PATH;
