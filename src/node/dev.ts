import { createServer } from 'vite';
import { pluginIndexHtml } from './plugin-jaguar/indexHtml';
import pluginReact from '@vitejs/plugin-react';
import { PACKAGE_ROOT } from './constants';
import { resolveConfig } from './config';
import { pluginConfig } from './plugin-jaguar/config';
import { pluginRoutes } from './plugin-routes';

export async function createDevServer(
  root: string,
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, 'serve', 'development');
  console.log(config);

  return createServer({
    root: PACKAGE_ROOT,
    plugins: [
      pluginIndexHtml(),
      pluginReact({
        jsxRuntime: 'automatic'
      }),
      pluginConfig(config, restartServer),
      pluginRoutes({
        root: config.root
      })
    ],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  });
}
