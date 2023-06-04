import * as vite from 'vite';

declare function createDevServer(root: string, restartServer: () => Promise<void>): Promise<vite.ViteDevServer>;

export { createDevServer };
