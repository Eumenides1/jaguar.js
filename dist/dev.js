"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkRKESYTHDjs = require('./chunk-RKESYTHD.js');


var _chunkEH4W5WKDjs = require('./chunk-EH4W5WKD.js');

// src/node/dev.ts
var _vite = require('vite');
async function createDevServer(root, restartServer) {
  const config = await _chunkEH4W5WKDjs.resolveConfig.call(void 0, root, "serve", "development");
  console.log(config);
  return _vite.createServer.call(void 0, {
    root: _chunkRKESYTHDjs.PACKAGE_ROOT,
    plugins: await _chunkRKESYTHDjs.createVitePlugins.call(void 0, config, restartServer),
    server: {
      fs: {
        allow: [_chunkRKESYTHDjs.PACKAGE_ROOT]
      }
    }
  });
}


exports.createDevServer = createDevServer;
