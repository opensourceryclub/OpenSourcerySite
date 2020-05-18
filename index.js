const express = require('express')

// for testing
const PORT = 3000

// create express app
const app = express()

// serve files from build directory 
app.use(express.static('build'))

// start server
app.listen(PORT, () => {
  console.log(`Open Sourcery static file server running on :${PORT}`)
})
