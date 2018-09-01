"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan = require("bunyan");
const inversify_restify_utils_1 = require("inversify-restify-utils");
const ioc_1 = require("./config/ioc");
let logger = bunyan.createLogger({
    name: 'demo_logs',
    streams: [{
            stream: process.stdout,
            level: 'debug'
        }]
});
let port = 3000 || process.env.PORT;
let server = new inversify_restify_utils_1.InversifyRestifyServer(ioc_1.default, {
    name: 'demo',
    version: '1.0',
    log: logger
});
server.setConfig((app) => {
})
    .build()
    .listen(port, () => {
    logger.info(`Listening on port ${port}`);
});
//# sourceMappingURL=main.js.map