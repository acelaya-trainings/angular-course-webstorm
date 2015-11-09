// This script will output "Client's question: Hello, world?" and "Server's answer: 42" in alternating order
// every second until the script is stopped.


//PARA EJECUTAR npm install json-over-tcp
var someRandomPort = 8099,
    jot = require('json-over-tcp');

var server = jot.createServer(someRandomPort);
server.on('listening', createConnection);
server.on('connection', newConnectionHandler);

// Triggered whenever something connects to the server
function newConnectionHandler(socket){
    // Whenever a connection sends us an object...
    socket.on('data', function(data){
        // Output the question property of the client's message to the console
        console.log("Client's question: " + data.question);

        // Wait one second, then write an answer to the client's socket
        setTimeout(function(){
            socket.write({answer: 42});
        }, 1000);
    });
};

// Creates one connection to the server when the server starts listening
function createConnection(){
    // Start a connection to the server
    var socket = jot.connect(someRandomPort, function(){
        // Send the initial message once connected
        socket.write({question: "Hello, world?"});
    });

    // Whenever the server sends us an object...
    socket.on('data', function(data){
        // Output the answer property of the server's message to the console
        console.log("Server's answer: " + data.answer);

        // Wait one second, then write a question to the socket
        setTimeout(function(){
            // Notice that we "write" a JSON object to the socket
            socket.write({question: "Hello, world?"});
        }, 1000);
    });
}

// Start listening
server.listen(someRandomPort);


/*API
API
The factory functions below behave similar to node's net package (but they return jot versions of the server or socket).

jot.createServer([options], [connectionListener])
See net.createServer([options], [connectionListener]).

    jot.connect(options, [connectionListener])
See net.connect(options, [connectionListener]).

    jot.createConnection(options, [connectionListener])
See net.createConnection(options, [connectionListener]).

    jot.connect(port, [host], [connectListener])
See net.connect(port, [host], [connectListener]).

    jot.createConnection(options, [connectionListener])
See net.createConnection(port, [host], [connectListener]).

    jot.connect(path, [connectListener])
See net.connect(path, [connectListener]).

    jot.createConnection(path, [connectListener])
See net.createConnection(path, [connectListener]).

    jot.createProtocol(stream)
Factory function for creating a jot protocol object.

    jot.createSocket([options])
Factory function for creating a jot socket.

    jot.Server
The server API is the same as the Server API in the native 'net' module with the following differences:

    Event: 'connection'
Emits a jot socket (see it's API below) instead of a plain tcp socket.

jot.Socket
The socket API is the same as the Socket API in the native 'net' module with the following differences:

    Event: 'data'
Emits a JSON object which was sent by the other end of the socket.

    write(obj)
Sends an object to the other end of the socket. This method doesn't accept any of the other parameters as the plain tcp socket.

jot.Protocol
The protocol object is what serializes/deserializes JSON data over the wire.

    new Protocol(stream)
Takes in a Stream object and reads/writes JSON objects using it's a simple protocol (a protocol signature, message length, and stringified JSON).

write(obj)
Writes an object which can be stringified to the stream.

    on
Bind to an event ('data' is the only one ever emitted).

removeListener
Remove a bound listener.

    Event: 'data'
Emits a JSON object whenever a stream message is recieved.

    Protocol
If you would like to implement the protocol yourself, the server will expect the following in order in the byte stream:

    16-bit unsigned little-endian integer with 206 as the value. This is the protocol signature, if a message is sent without this signature a protocol error will be raised.
    A 32-bit unsigned little-endian integer with the length of the message being sent as the value.
    A UTF-8 string with the stringified JSON as the value (the message).*/
