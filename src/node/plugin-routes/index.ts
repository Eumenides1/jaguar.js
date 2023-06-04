import { Plugin } from 'vite';
import { RouteService } from './RouteService';
import React from 'react';
// 本质: 把文件目录结构 -> 路由数据

export interface Route {
  path: string;
  element: React.ReactElement;
  filePath: string;
}

interface PluginOptions {
  root: string;
}

export const CONVENTIONAL_ROUTE_ID = 'jaguar:routes';

export function pluginRoutes(options: PluginOptions): Plugin {
  const routeService = new RouteService(options.root);

  return {
    name: 'jaguar:routes',
    async configResolved() {
      await routeService.init();
    },
    resolveId(id: string) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return '\0' + id;
      }
    },

    load(id: string) {
      if (id === '\0' + CONVENTIONAL_ROUTE_ID) {
        return routeService.generateRoutesCode();
      }
    }
  };
}
