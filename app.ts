import * as dotenv from 'dotenv';
import RTS from './src/RTS';
import MessageImpl from './src/modules/commons/models/Message/MessageImpl';
import MessageMetadataImpl from './src/modules/commons/models/MessageMetadata/MessageMetadataImpl';
import ExecutionContextType from './src/utils/constant/ExecutionContextType';
const rtsRemote = new RTS(ExecutionContextType.REMOTE);
const rtsLocal = new RTS(ExecutionContextType.LOCAL);
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const log = console.log;

//*****************************************************************************
// Environment Configuration
//*****************************************************************************
dotenv.config();
//*****************************************************************************

//*****************************************************************************
// Express Middlewares
//*****************************************************************************
app.use(bodyParser.json());
app.use(express.static('public'));
//*****************************************************************************

//*****************************************************************************
// Test Routes
//*****************************************************************************
app.get('/socket', (req: any, res: any) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', async (req: any, res: any) => {
  const result = await rtsRemote
    .getEvertokModule()
    .getSpotService()
    .getTrendingSpots();
  return res.send(result);
});

app.get('/test2', async (req: any, res: any) => {
  const result = await rtsRemote
    .getCommonsModule()
    .getMessagingService()
    .reportMessage({ messageId: '123', userId: '43' });
  return res.send(result);
});

app.get('/test3', async (req: any, res: any) => {
  const result = await rtsRemote
    .getCommonsModule()
    .getMessagingService()
    .getRooms();
  return res.send(result);
});

app.get('/test4', async (req: any, res: any) => {
  const message = new MessageImpl(new MessageMetadataImpl(new Date(), false, '1'), '1', false, 'test message from server');
  return res.send(
    await rtsRemote
      .getCommonsModule()
      .getMessagingService()
      .sendMessageToRoom('#channelloco', message)
  );
});
//*****************************************************************************

//*****************************************************************************
// Remote Method Execution Entry Point
//*****************************************************************************
app.post('/remote', async (req: any, res: any) => {
  const { moduleName, methodName, serviceName, parameters } = req.body;
  log(`Executing remotely ${serviceName}.${methodName}()`);
  return res.send(await rtsLocal.getCommand().execute(moduleName, serviceName, methodName, parameters));
});
//*****************************************************************************

export default app;
