var express = require('express');
var server = express();

server.get('/', function (request, response) {
  console.log('Esta es la raiz de mi sitio');
  response.status(200).send('Bienvenido a mi servidor');
});

server.get('/contact', function (req, res) {
  res.status(200).send('Pagina de Contacto');
});

server.listen(2500, function () {
  console.log('Mi servidor esta en linea en el puerto 2500');
});
