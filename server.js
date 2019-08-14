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
var dbname = 'proyecto-perfil';

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
  // getMongoDataBase(mongoUrl, dbname)
  //   .then(function (db) {
  //     db.collection('datos').find({}).toArray(function (error, data) {
  //       if (error) {
  //         console.error(error);
  //         return res.status(500).send(error);
  //       }

  //       res.status(200).send(data[1] || {});
  //     });
  //   })
  //   .catch(function (error) {
  //     console.error(error);

  //     return res.status(500).send(error);
  //   });

  mongoClient
    .connect(mongoUrl)
    .then(function (client) {
      return client.db(dbname);
    })
    .then(function (database) {
      return database.collection('datos');
    })
    .then(function (collection) {
      return collection.find({}).toArray();
    })
    .then(function (results) {
      return res.status(200).send(results);
    })
    .catch(function (error) {
      return res.status(500).send(error);
    });
});

server.post('/api/datos', function (req, res) {
  getMongoDataBase(mongoUrl, dbname)
    .then(function (db) {
      var dataCollection = db.collection('datos');
      dataCollection.insert({
        name: 'Agustina',
        lastname: 'Sosa',
        age: '18'
      }, function (error, result) {
        console.log('Insert into datos');
        console.log('error', error);
        console.log('resutl', result);

        return res.status(200).send('ok');
      });
    })
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
