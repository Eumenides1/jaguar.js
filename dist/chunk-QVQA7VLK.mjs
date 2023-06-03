// src/node/config.ts
import { resolve } from "path";
import fs from "fs-extra";
import { loadConfigFromFile } from "vite";
async function resolveUserConfig(root, command, mode) {
  const configPath = getUserConfigPath(root);
  const result = await loadConfigFromFile({ command, mode }, configPath, root);
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
    const configPath = supportConfigFiles.map((file) => resolve(root, file)).find(fs.pathExistsSync);
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
    title: userConfig.title || "Island.js",
    description: userConfig.description || "SSG Framework",
    themeConfig: userConfig.themeConfig || {},
    vite: userConfig.vite || {}
  };
}
function defineConfig(config) {
  return config;
}

export {
  resolveConfig,
  defineConfig
};
