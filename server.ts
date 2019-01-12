import app from './app';
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket: any) => {
  for (let i = 0; i < 5; i++) {
    socket.on(`channel-${i}`, (msg: any) => {
      socket.broadcast.emit(`channel${i}`, msg);
    });
  }
  for (let i = 0; i < 5; i++) {
    socket.on(`user-${i}`, (msg: any) => {
      socket.emit(`user${i}`, msg);
    });
  }
});

http.listen(8090, () => {});
