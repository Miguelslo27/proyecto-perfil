var express = require('express');
var server = express();
var path = require('path');
var port = process.env.PORT || 8080;
var env = process.env.ENV || 'DEV';
var folderBuild = env == 'PROD' ? '/dist/' : '/.temp/';
var cors = require('cors');

server.use(express.static(path.join(__dirname, folderBuild)));
server.use(cors());

server.get('/', function (req, res) {
  // console.log('Esta es la raiz de mi sitio');
  // res.status(200).send('Bienvenido a mi servidor');
  return res.sendFile(path.join(__dirname, folderBuild, 'index.html'));
});

server.get('/api/datos', function (req, res) {
  res.status(200).send({
    name: "Miguel",
    lastName: "Sosa"
  });
});

server.get('/home', function (req, res) {
  // console.log('Esta es la raiz de mi sitio');
  // res.status(200).send('Bienvenido a mi servidor');
  return res.sendFile(path.join(__dirname, folderBuild, 'index.html'));
});

server.get('/contact', function (req, res) {
  // res.status(200).send('Pagina de Contacto');
  return res.sendFile(path.join(__dirname, folderBuild, 'contact.html'));
});

server.get('/repos', function (req, res) {
  return res.sendFile(path.join(__dirname, folderBuild, 'repos.html'));
});

server.listen(port, function () {
  console.log('Mi servidor esta en linea en el puerto ' + port);
});
