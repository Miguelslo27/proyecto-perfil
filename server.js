var express = require('express');
// var mongodb = require('mongodb');
// var mongoClient = mongodb.MongoClient;
var server = express();
var path = require('path');
var port = process.env.PORT || 8080;
var env = process.env.ENV || 'DEV';
var folderBuild = env == 'PROD' ? '/dist/' : '/.temp/';
// var cors = require('cors');

// var mongoUrl = 'mongodb://localhost:27017/';
// var dbname = 'proyecto-perfil';

// function getCollection(collectionName) {
//   return mongoClient
//     .connect(mongoUrl)
//     .then(function (client) {
//       return client.db(dbname);
//     })
//     .then(function (database) {
//       return database.collection(collectionName);
//     });
// }

server.use(express.static(path.join(__dirname, folderBuild)));
// server.use(cors());

server.get('/', function (req, res) {
  console.log('Esta es la raiz de mi sitio');
  return res.sendFile(path.join(__dirname, folderBuild, 'index.html'));
});

// server.get('/api/datos-personales', function (req, res) {
//   getCollection('datos')
//     .then(function (collection) {
//       return collection.find({}).toArray();
//     })
//     .then(function (results) {
//       return res.status(200).send(results[0] || {});
//     })
//     .catch(function (error) {
//       return res.status(500).send(error);
//     });
// });

// server.get('/api/skills', function (req, res) {
//   getCollection('skills')
//     .then(function (collection) {
//       return collection.find({}).toArray();
//     })
//     .then(function (results) {
//       return res.status(200).send(results);
//     })
//     .catch(function (error) {
//       return res.status(500).send(error);
//     });
// });

// server.get('/api/contact-info', function (req, res) {
//   getCollection('contact-info')
//     .then(function (collection) {
//       return collection.find({}).toArray();
//     })
//     .then(function (results) {
//       return res.status(200).send(results[0] || {});
//     })
//     .catch(function (error) {
//       return res.status(500).send(error);
//     });
// });

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
  console.log('Server running at ' + port);
});
