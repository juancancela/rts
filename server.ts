import app from './app';
import MessageMetadataImpl from './src/modules/commons/models/MessageMetadata/MessageMetadataImpl';
import MessageImpl from './src/modules/commons/models/Message/MessageImpl';
import RTS from '.';
const http = require('http').Server(app);
const io = require('socket.io')(http);
const rts = new RTS(false, process.env.RTS_SERVER_BASE_URL, process.env.RTS_API_BASE_URL);
const sendMessageToRoom = rts.getCommonsModule().getMessagingService().sendMessageToRoom;

io.on('connection', (socket: any) => {
  socket.on(`loco`, async (msg: any) => {
    const message = new MessageImpl(new MessageMetadataImpl(new Date(), false, '1'), '1', false, msg);
    await sendMessageToRoom('#loco', message);
    socket.broadcast.emit(`loco`, msg);
  });
  socket.on(`user`, (msg: any) => {
    socket.emit(`user`, msg);
  });
});

http.listen(process.env.RTS_SERVER_PORT, () => { });
