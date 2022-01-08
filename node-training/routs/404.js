function notFound(res) {
  res.setHeader("content-Type", "text/html");
  res.write(`
  <html>
  <head>
  <title>404</title>
  <style>h3, p { text-align:center}</style>
  </head>
  <body>
    <h3>404</h3>
    <p>
    Page / File Not Found
    <br/><br/>
    <a href="/">Back to main Page</a>
    </p>
  </body>
  </html>
  `);
  res.end();
}

module.exports = notFound