var express = require('express');
var server = express();
var path = require('path');

server.use(express.static(__dirname + '/dist/'));

server.get('/', function (req, res) {
  // console.log('Esta es la raiz de mi sitio');
  // res.status(200).send('Bienvenido a mi servidor');
  return res.sendFile(path.join(__dirname, '/dist/index.html'));
});

server.get('/contact', function (req, res) {
  res.status(200).send('Pagina de Contacto');
});

server.listen(process.env.PORT || 8080, function () {
  console.log('Mi servidor esta en linea en el puerto 2500');
});
