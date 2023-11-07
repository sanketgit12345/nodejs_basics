const express = require('express')
const app = express()

app.get('/',  (req, res) => {
  console.log("Get the request parameter from browser");
  console.log("Hello",req.query.name)
  res.send('Hello World')
})

app.listen(3000)