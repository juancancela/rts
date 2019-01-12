const express = require('express');
const app = express();
const API_VERSION_PREFIX = '/api/v1';
const log = console.log;
import apiRoutes from './src/api';
import CommandImpl from './src/module/commons/utils/command/CommandImpl';

app.use(express.static('public'));
app.use(API_VERSION_PREFIX, apiRoutes.auth);
app.use(API_VERSION_PREFIX, apiRoutes.messaging);
app.use(API_VERSION_PREFIX, apiRoutes.user);

app.get('/socket', (req: any, res: any) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/remote', async (req: any, res: any) => {
  let methodName = 'getMessage';
  let returnType = 'Message';
  let serviceName = 'MessagingService';
  let parameters = 'parameters';
  log(`Executing remotely ${serviceName}.${methodName}():${returnType}`);
  return res.send(await new CommandImpl().execute(methodName, returnType, serviceName, parameters));
});

export default app;
