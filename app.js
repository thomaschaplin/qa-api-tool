const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const router = require('./routes/index').router
const notFound = require('./middleware/404')
const errors = require('./middleware/error')


app.listen(port, () => console.log(`Server listening on port ${port}!`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)
app.use(notFound)
app.use(errors)