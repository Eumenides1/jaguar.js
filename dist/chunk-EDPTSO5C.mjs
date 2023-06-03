import {
  __dirname
} from "./chunk-FSOZKK77.mjs";

// src/node/constants/index.ts
import { join } from "path";
var PACKAGE_ROOT = join(__dirname, "..");
var DEFAULT_HTML_PATH = join(PACKAGE_ROOT, "template.html");
var CLIENT_ENTRY_PATH = join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "client-entry.tsx"
);
var SERVER_ENTRY_PATH = join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "ssr-entry.tsx"
);

export {
  PACKAGE_ROOT,
  DEFAULT_HTML_PATH,
  CLIENT_ENTRY_PATH,
  SERVER_ENTRY_PATH
};
