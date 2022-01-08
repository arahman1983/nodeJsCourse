const url = require('url');
function users(req, res) {
  const params = url.parse(req.url, true).query.userName
  res.write(`
    <html>
      <head><title>My first Date</title></head>
      <body>
        <h2>Users</h2>
        <ul>
          <li> Max </li>
          <li> Ahmed </li>
          <li> Ana </li>
          ${params ? '<li>' + params + '</li>' : ''}
        </ul>
      </body>
    </html>
  `)
  res.end()
}

module.exports = users