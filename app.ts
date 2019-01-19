import CommandImpl from './src/utils/command/CommandImpl';
import ExecutionContext from './src/module/commons/utils/constants/ExecutionContext';
import RT from './src/RT';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const log = console.log;
const command = new CommandImpl(false);

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/socket', (req: any, res: any) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', async (req: any, res: any) => {
  const result = await RT.getEvertokModule(ExecutionContext.REMOTE).getSpotService().getTrendingSpots();
  return res.send(result);
});

app.get('/test2', async (req: any, res: any) => {
  const result = await RT.getCommonsModule(ExecutionContext.REMOTE).getMessagingService().getMessages(null);
  return res.send(result);
});

app.post('/remote', async (req: any, res: any) => {
  const { moduleName, methodName, serviceName, parameters } = req.body;
  log(`Executing remotely ${serviceName}.${methodName}()`);
  return res.send(await command.execute(moduleName, serviceName, methodName, parameters));
});

export default app;
