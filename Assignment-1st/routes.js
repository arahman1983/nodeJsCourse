const home = require("./routs/home");
const users = require("./routs/users");
const createUser = require('./routs/createUser');

function routsHandler(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") return home(res);
  if (url.indexOf('/users') >= 0) return users(req,res);
  if (url === "/create-user" && method === 'POST') return createUser(req, res);
}

module.exports = routsHandler;
