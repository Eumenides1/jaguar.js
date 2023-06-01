import { createServer } from "vite";
import { pluginIndexHtml } from "./plugin-jaguar/indexHtml";

export function createDevServer(root :string){
    return createServer({
        root,
        plugins: [pluginIndexHtml()]
    });
}