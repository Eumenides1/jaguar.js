// node_modules/.pnpm/tsup@6.7.0_ts-node@10.9.1_typescript@5.0.4/node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

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
    title: userConfig.title || "jaguar.js",
    description: userConfig.description || "SSG Framework",
    themeConfig: userConfig.themeConfig || {},
    vite: userConfig.vite || {}
  };
}
function defineConfig(config) {
  return config;
}

export {
  __dirname,
  resolveConfig,
  defineConfig
};
