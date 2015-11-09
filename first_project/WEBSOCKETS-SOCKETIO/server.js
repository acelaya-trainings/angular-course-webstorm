//referenciamos a expressJS
var app = require('express')()
  // creamos un web server
  , server = require('http').createServer(app)
  // y le agregamos le agregamos socketIO
  , io = require('socket.io').listen(server);
 
// ponemos en escucha nuestro server Express con WebSocket
server.listen(3000);
 
// agregamos una ruta inicial para retornar un index.html
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
 
// nos suscribimos al evento de socketIO cuando 
// un cliente se conecta por WebSockets
io.sockets.on('connection', function (socket) {
 
  // este callback va a ser llamado cuando tenemos
  // un nuevo cliente y en el argumento 'socket'
  // vamos a tener nuestro 'enganche' a ese cliente  
 
  // apenas se conecta, le mandamos un mensaje
  // de bienvenida haciendo un 'emit' con un nombre
  // para el mensaje y un json con los datos
  socket.emit('bienvenida', { digo: 'Hola cliente WS!' });
 
  // nos suscribimos a un mensaje que nos puede 
  // enviar el cliente.
  socket.on('quiero un random', function (cada_cuanto) {
 
    setInterval(function(){
      var rnd = Math.floor((Math.random()*1000)+1);
      socket.emit('toma un random', { numero: rnd })
    }, cada_cuanto);
 
  });
});