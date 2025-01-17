const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.type('html')
  res.send('<html>' +
    '<head>' +
      '<link rel="stylesheet" href="style.css">' +
    '</head>' +
    '<body>' +
      '<h1>Hello World! This is a very simple website!</h1>' +
    '</body>' +
    '</html>')
})

app.get('/style.css', (req, res) => {
  res.type('css')
  res.send('h1 {background-color: red;}')
})

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})

// Preserve log means that it keeps old requests around to the Network log

// Always press Disable Cache which means don't remember the previous thing sent to Chrome or other web browser

// **I DID THIS** !