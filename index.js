const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/stock-web'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/stock-web/index.html');
});

// Otros endpoints o configuraciones de tu servidor

app.listen(4200, function() {
  console.log('Aplicación Angular desplegada en el puerto 4200');
});
