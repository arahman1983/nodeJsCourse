function createUser(req, res) {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const data = Buffer.concat(body).toString();
    const userName = data.split("=")[1].split("+").join(" ");
    console.log(`userName`, userName)
    res.statusCode = 302;
    res.setHeader("Location", `/users?userName=${userName}`);
  
    return res.end();
  });
}

module.exports = createUser;
