const express = require('express');

const app = express();
const port = 3000;

app.get('/about', function (request, response) {
    response.send('<h1>О сайте</h1>');
});
  
app.use('/contact', function (request, response) {
    response.send('<h1>Контакты</h1>');
});


app.get('/', function (request, response) {
    response.send('<h1>Главная страница</h1>');
});

app.get('/bo*k', function (request, response) {
    response.send(request.url);
});

app.get('/bo+k', function (request, response) {
    response.send(request.url);
});

app.get('/bo?k', function (request, response) {
    response.send(request.url);
});

app.get('/book(.html)?', function (request, response) {
    response.send(request.url);
});

app.get(/.*(\.)html$/, function (request, response) {
    response.send(request.url);
});
  

app.listen(port);