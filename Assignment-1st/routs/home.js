function home(res) {
  res.write(`
    <html>
      <head><title>My first Date</title></head>
      <body>
        <p>Welcome in First Assignment of NodeJs Course</p>
        <form action="/create-user" method="POST">
          <input type="text" name="username" placeholder="Please insert your name" />
          <button type="submit">Send Name</button>
        </form>
      </body>
    </html>
  `)
  res.end()
}

module.exports = home