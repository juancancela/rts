import Modules from './src/utils/modules/Modules';
import CommandImpl from './src/utils/command/CommandImpl';
import EvertokModuleFactory from './src/module/evertok/utils/factories/EvertokModuleFactory';
import ExecutionContext from './src/module/commons/utils/constants/ExecutionContext';
import RT from './src/RT';
import CommonsModuleFactory from './src/module/commons/utils/factories/CommonsModuleFactory';
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
  const result = await RT.getCommonsModule(ExecutionContext.REMOTE).getMessagingService().getMessage('1');
  return res.send(result);
});

app.post('/remote', async (req: any, res: any) => {
  const { moduleName, methodName, serviceName, parameters } = req.body;
  log(`Executing remotely ${serviceName}.${methodName}()`);
  return res.send(await command.execute(moduleName, serviceName, methodName, parameters, 'http://localhost:8090/remote'));
});

export default app;
