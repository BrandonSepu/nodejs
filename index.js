const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/stock-web'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/stock-web/index.html');
});

// Otros endpoints o configuraciones de tu servidor
const host = 'nodejs-production-5c29.up.railway.app';
const port = process.env.PORT || 3000;
app.listen(port, host, function() {
  console.log(`Aplicación Node.js desplegada en ${host}:${port}`);
});
