// Imports
const express = require('express')

// Port
const port = process.env.PORT || 5000

// Init express
const app = express()

// Use static files
app.use(express.static(`${__dirname}/client/build`))

// Default route
app.get('*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`))

// Init app
app.listen(port, () => console.log(`App started port ${port} ...`))
