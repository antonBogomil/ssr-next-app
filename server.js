const {createServer} = require('http');
const {parse} = require('url');
const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    if (dev) {
        const devServerConfig = require('./devServer');
        devServerConfig(server)
    }
    server.all('*', (req, res) => handle(req, res));
    server.listen(port, err => {
        if (err) {
            throw err
        }
        console.log(`> Ready on port ${port} [${env}]`)
    })
}).catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err)
});