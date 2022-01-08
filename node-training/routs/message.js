const fs = require('fs');

function message(req, res) {
  const body = [];
    req.on("data", (chunk) => {
      console.log(`chunk`, chunk)
      //chunk <Buffer 79 6f 75 72 4e 61 6d 65 3d 66 64 67 66 64 67>
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      // console.log(`body`, parseBody)
      fs.writeFile(
        "result.html",
        `<html>
            <head>
              <style>
                .dataFromServer{ color:red }
              </style>
            </head>
            <body>
              <p>Hello this data from node server that you send in input</p>
              <p class="dataFromServer">${parseBody.split("=")[1].split("+").join(" ")}</p>
            </body>
          </html>`
      , (err) => {
        console.log(`err`, err)
        res.statusCode = 302;
        res.setHeader("Location", "/result");
        return res.end();
      });
  
    });
}

module.exports = message