const http = require('http');
const routsHandler = require('./routes');

const server = http.createServer(routsHandler)


server.listen(3000)