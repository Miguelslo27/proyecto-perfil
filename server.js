var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send("Hola mundo!");
});

app.get('/contact', function (req, res) {
  res.status(200).send("Hola contact!");
});

app.get('/profile', function (req, res) {
  res.status(200).send("Hola profile!");
});

app.listen(8000, function () {
  console.log("Server online en el puerto 8000");
});
