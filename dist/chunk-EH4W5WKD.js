"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/node/config.ts
var _path = require('path');
var _fsextra = require('fs-extra'); var _fsextra2 = _interopRequireDefault(_fsextra);
var _vite = require('vite');
async function resolveUserConfig(root, command, mode) {
  const configPath = getUserConfigPath(root);
  const result = await _vite.loadConfigFromFile.call(void 0, { command, mode }, configPath, root);
  if (result) {
    const { config: rawConfig = {} } = result;
    const userConfig = await (typeof rawConfig === "function" ? rawConfig() : rawConfig);
    return [configPath, userConfig];
  } else {
    return [configPath, {}];
  }
}
function getUserConfigPath(root) {
  try {
    const supportConfigFiles = ["config.ts", "config.js"];
    const configPath = supportConfigFiles.map((file) => _path.resolve.call(void 0, root, file)).find(_fsextra2.default.pathExistsSync);
    return configPath;
  } catch (e) {
    console.error(`Failed to load user config: ${e}`);
    throw e;
  }
}
async function resolveConfig(root, command, mode) {
  const [configPath, userConfig] = await resolveUserConfig(root, command, mode);
  const siteConfig = {
    root,
    configPath,
    siteData: resolveSiteData(userConfig)
  };
  return siteConfig;
}
function resolveSiteData(userConfig) {
  return {
    title: userConfig.title || "jaguar.js",
    description: userConfig.description || "SSG Framework",
    themeConfig: userConfig.themeConfig || {},
    vite: userConfig.vite || {}
  };
}
function defineConfig(config) {
  return config;
}




exports.resolveConfig = resolveConfig; exports.defineConfig = defineConfig;
