const http = require("http");
const routHandler = require('./routes')
const server = http.createServer(routHandler);

server.listen(3000);
