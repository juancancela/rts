import ModuleType from './src/utils/modules/ModuleType';
import CommandImpl from './src/utils/command/CommandImpl';
const express = require('express');
const app = express();
const log = console.log;

app.use(express.static('public'));

app.get('/socket', (req: any, res: any) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', async (req: any, res: any) => {
  log('test 12345');
  // const evertokSpotService = new RemoteEvertokSpotServiceImpl();
  // const result = await evertokSpotService.getTrendingSpots();
  // return res.send(result);
  return res.send('hola');
});

app.post('/remote', async (req: any, res: any) => {
  const { methodName, returnType, serviceName, parameters } = req.body;
  log(`Executing remotely ${serviceName}.${methodName}():${returnType}`);
  return res.send(await new CommandImpl().execute(ModuleType.COMMONS, methodName, returnType, serviceName, parameters));
});

export default app;
