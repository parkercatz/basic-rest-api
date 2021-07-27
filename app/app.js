const express = require('express')
const app = express()

app.get('/api/v1/hello', (req, res) => {
  res.json({ message: 'Hello World' })
})

const port = process.env.PORT || 3000
app.listen(port)
console.log('listening on port:' + port)
