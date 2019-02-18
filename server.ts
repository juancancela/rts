import app from './app';
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket: any) => {
  socket.on(`loco`, (msg: any) => {
    socket.broadcast.emit(`loco`, msg);
  });
  socket.on(`user`, (msg: any) => {
    socket.emit(`user`, msg);
  });
});

http.listen(process.env.RTS_SERVER_PORT, () => { });
