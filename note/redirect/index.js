const express = require('express')
const app = express()

app.use('/index', function (request, response) {
  response.redirect('https://xsltdev.ru')
})

app.use('/home/foo/bar', function (request, response) {
    response.redirect('../about')
})

response.redirect(301, '/about')

app.listen(3000)