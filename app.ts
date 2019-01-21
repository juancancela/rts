import CommandImpl from './src/utils/command/CommandImpl';
import ExecutionContext from './src/module/commons/utils/constants/ExecutionContext';
import rt from './src/RTS';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const log = console.log;
const command = new CommandImpl();

//*****************************************************************************
// Environment Configuration
//*****************************************************************************
import * as dotenv from 'dotenv';
import MessageFilterImpl from './src/module/commons/models/Message/MessageFilterImpl';
import Config from './src/config/Config';
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
  Config.isRemote = true;
  const result = await rt
    .getEvertokModule()
    .getSpotService()
    .getTrendingSpots();
  return res.send(result);
});

app.get('/test2', async (req: any, res: any) => {
  Config.isRemote = true;
  const result = await rt
    .getCommonsModule()
    .getMessagingService()
    .reportMessage(null, null);
  return res.send(result);
});
//*****************************************************************************

//*****************************************************************************
// Remote Method Execution Entry Point
//*****************************************************************************
app.post('/remote', async (req: any, res: any) => {
  Config.isRemote = false;
  const { moduleName, methodName, serviceName, parameters } = req.body;
  log(`Executing remotely ${serviceName}.${methodName}()`);
  return res.send(await command.execute(moduleName, serviceName, methodName, parameters));
});
//*****************************************************************************

export default app;
