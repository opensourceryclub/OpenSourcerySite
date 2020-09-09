const express = require('express')
const path = require('path')

// for testing
const PORT = 8080

// create express app
const app = express()

const build = path.
// serve files from build directory
app.use(express.static('build'))

// start server
app.listen(PORT, () => {
  console.log(`Open Sourcery web server started on :${PORT}`)
})
