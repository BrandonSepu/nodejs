const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/stock-web'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/stock-web/index.html');
});

// Otros endpoints o configuraciones de tu servidor
const host = process.env.HOST;
const port = process.env.PORT;
app.listen(port, host, function() {
  console.log(`Aplicación Node.js desplegada en ${host}:${port}`);
});
