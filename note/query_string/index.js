const express = require('express')



const app = express()
app.get('/', function (request, response) {
  response.send('<h1>Главная страница</h1>')
})
app.use('/about', function (request, response) {
  let id = request.query.id
  let userName = request.query.name
  let user = {
    name: userName,
    id: id
  };
  
  response.send(`<pre>${JSON.stringify(user, null, 2)}</pre>`);
})

app.listen(3000)