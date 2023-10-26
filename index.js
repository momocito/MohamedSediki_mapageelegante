const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    });    
 
    app.use('/', express.static(__dirname + '/'));

    io.on('connection', (socket) => {
        console.log('Un client est connecté');
      });
      io.off('disconnect', ()=>{
        console.log('le client sest déconnecté');
      });
         
     
server.listen(3000, () => {
console.log('Le serveur est en écoute sur le port3000');
});