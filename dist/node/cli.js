"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const dev_1 = require("./dev");
const cli = (0, cac_1.default)('jaguar').version('0.0.1').help();
cli.command('dev [root]', 'start dev server').action(async (root) => {
    const server = await (0, dev_1.createDevServer)(root);
    await server.listen();
    server.printUrls();
});
cli
    .command("build [root]", "build for production")
    .action(async (root) => {
    console.log("build", root);
});
cli.parse();
