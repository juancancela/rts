import CommandImpl from './src/module/commons/utils/command/CommandImpl';
const express = require('express');
const app = express();
const log = console.log;

app.use(express.static('public'));

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
