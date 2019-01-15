import ModuleType from './src/utils/modules/ModuleType';
import CommandImpl from './src/utils/command/CommandImpl';
import EvertokModuleFactory from './src/module/evertok/utils/factories/EvertokModuleFactory';
import ExecutionContext from './src/module/commons/utils/constants/ExecutionContext';
import RT from './src/RT';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const log = console.log;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/socket', (req: any, res: any) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', async (req: any, res: any) => {
  log('test 12345');
  const result = await RT.getEvertokModule(ExecutionContext.REMOTE).getSpotService().getTrendingSpots();
  return res.send(result);
});

app.post('/remote', async (req: any, res: any) => {
  const { methodName, returnType, serviceName, parameters } = req.body;
  log(`Executing remotely ${serviceName}.${methodName}():${returnType}`);
  return res.send(await new CommandImpl().execute(ModuleType.EVERTOK, serviceName, methodName, returnType, parameters, 'http://localhost:8090/remote'));
});

export default app;
