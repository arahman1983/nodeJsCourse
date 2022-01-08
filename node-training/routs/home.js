function home(res) {
  res.write(`
    <html>
      <head><title>My first Date</title></head>
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message" placeholder="Please insert your name" />
          <button type="submit">Send Name</button>
        </form>
      </body>
    </html>
    `);
    return res.end();
}

module.exports = home