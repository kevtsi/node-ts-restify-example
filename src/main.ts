import * as bunyan from 'bunyan';
import { InversifyRestifyServer } from 'inversify-restify-utils';
import container from './config/ioc'

let logger = bunyan.createLogger({
    name: 'demo_logs',
    streams: [{
        stream: process.stdout,
        level: 'debug'
    }]
});

let port = 3000 || process.env.PORT;
let server = new InversifyRestifyServer(container, {
    name: 'demo',
    version: '1.0',
    log: logger
});
server.setConfig((app) => {
    // middleware goes here
})
.build()
.listen(port, () => {
    logger.info(`Listening on port ${port}`);
});