const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/stock-web'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/stock-web/index.html');
});

// Otros endpoints o configuraciones de tu servidor
const port = process.env.PORT || 4200;
app.listen(port, function() {
  console.log(`Aplicación Node.js desplegada en el puerto ${port}`);
});
