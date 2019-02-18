import * as dotenv from 'dotenv';
import RTS from './src/RTS';
import MessageImpl from './src/modules/commons/models/Message/MessageImpl';
import MessageMetadataImpl from './src/modules/commons/models/MessageMetadata/MessageMetadataImpl';
import FilterImpl from './src/utils/filter/FilterImpl';
import FilterCriteriaImpl from './src/utils/filter/FilterCriteriaImpl';
import FilterOperationType from './src/utils/filter/FilterOperationType';
import SortType from './src/utils/http/SortType';
const rts = new RTS(false, process.env.RTS_SERVER_BASE_URL, process.env.RTS_API_BASE_URL);
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
  rts.setIsRemote(true);
  const result = await rts
    .getEvertokModule()
    .getSpotService()
    .getTrendingSpots();
  return res.send(result);
});

app.get('/test2', async (req: any, res: any) => {
  rts.setIsRemote(true);
  const result = await rts
    .getCommonsModule()
    .getMessagingService()
    .reportMessage({ messageId: '123', userId: '43' });
  return res.send(result);
});

app.get('/test3', async (req: any, res: any) => {
  rts.setIsRemote(true);
  const filter1 = new FilterImpl([
    new FilterCriteriaImpl(FilterOperationType.MATCHES_REGEX, ['testchannel'], 'name'),
    new FilterCriteriaImpl(FilterOperationType.OFFSET, ['1'], 'offset')
  ]);
  const filter2 = new FilterImpl([new FilterCriteriaImpl(FilterOperationType.EQUALS_TO, ['testchannel'], 'name')]);
  const filter3 = new FilterImpl([new FilterCriteriaImpl(FilterOperationType.SORT, [SortType.DESC], 'name')]);
  const filter4 = new FilterImpl([
    new FilterCriteriaImpl(FilterOperationType.DIFFERENT_THAN, ['testchannel'], 'name'),
    new FilterCriteriaImpl(FilterOperationType.LIMIT, ['1'], 'count')
  ]);
  const filter5 = new FilterImpl([
    new FilterCriteriaImpl(FilterOperationType.DIFFERENT_THAN, ['testchannel1'], 'name')
  ]);
  const result = await rts
    .getCommonsModule()
    .getMessagingService()
    .getRooms(filter5);
  return res.send(result);
});

app.get('/test4', async (req: any, res: any) => {
  rts.setIsRemote(true);
  const result = await rts
    .getCommonsModule()
    .getMessagingService()
    .getMessages('loco')
  return res.send(result);
});

app.get('/test5', async (req: any, res: any) => {
  rts.setIsRemote(true);
  const message = new MessageImpl(
    new MessageMetadataImpl(new Date(), false, '1'),
    '1',
    false,
    'test message from server'
  );
  return res.send(
    await rts
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
  rts.setIsRemote(false);
  const { moduleName, methodName, serviceName, parameters } = req.body;
  log(`Executing remotely ${serviceName}.${methodName}()`);
  return res.send(await rts.getCommand().execute(moduleName, serviceName, methodName, parameters));
});
//*****************************************************************************

export default app;
