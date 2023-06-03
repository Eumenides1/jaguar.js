import * as vite from 'vite';

declare function createDevServer(root: string, restart: () => Promise<void>): Promise<vite.ViteDevServer>;

export { createDevServer };
