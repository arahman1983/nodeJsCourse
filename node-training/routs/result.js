const fs = require('fs');
const path = require('path');

function result(res) {
  // to send a html page as response
  const filePath = path.join(__dirname, "../result.html");
  let stat;
  try {
    stat = fs.statSync(filePath);
    res.writeHead(200, {
      "content-Type": "text/html",
      "content-Length": stat.size,
    });
    const readStream = fs.createReadStream(filePath);
    return readStream.pipe(res);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found!');
      res.statusCode = 302;
      res.setHeader("Location", "/notFound");
      return res.end();
    } else {
      throw err;
    }
  }
}

module.exports = result