const home = require('./routs/home');
const message = require('./routs/message');
const notFound = require('./routs/404');
const result = require('./routs/result')


function routHandler(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") return home(res)
  if (url === "/message" && method === "POST") return message(req,res)
  if (url === "/result") return result(res)
  return notFound(res)
}

module.exports = routHandler