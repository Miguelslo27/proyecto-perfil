var express = require('express');
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var server = express();
var path = require('path');
var port = process.env.PORT || 8080;
var env = process.env.ENV || 'DEV';
var folderBuild = env == 'PROD' ? '/dist/' : '/.temp/';
var cors = require('cors');

var mongoUrl = 'mongodb://localhost:27017/';
var dbname = 'proyecto-pefril';

function getMongoDataBase(url, dbname) {
  var mdbPromise = new Promise(function (resolve, reject) {
    mongoClient.connect(url, function (error, client) {
      if (error) return reject(error);

      var database = client.db(dbname);
      resolve(database);
    })
  });

  return mdbPromise;
}

server.use(express.static(path.join(__dirname, folderBuild)));
server.use(cors());

server.get('/', function (req, res) {
  // console.log('Esta es la raiz de mi sitio');
  // res.status(200).send('Bienvenido a mi servidor');
  return res.sendFile(path.join(__dirname, folderBuild, 'index.html'));
});

server.get('/api/datos', function (req, res) {
  getMongoDataBase(mongoUrl, dbname)
    .then(function (db) {
      console.log("Connection succed");
      console.log(db.toString());
    })
    .catch(function (error) {
      console.error(error);
    });

  res.status(200).send({
    ame: "Miguel",
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
