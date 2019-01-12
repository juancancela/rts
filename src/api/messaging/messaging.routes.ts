import RemoteMessagingServiceImpl from '../../module/commons/services/messaging/RemoteMessagingServiceImpl';
const express = require('express');

const router = express.Router();
const remoteMessagingService = new RemoteMessagingServiceImpl();
remoteMessagingService.getMessage('1');

router.get('/message', (req: any, res: any) => {
  res.send('/api/v1/message');
});

router.get('/message/:id', (req: any, res: any) => {
  res.send('/api/v1/message/:id');
});

router.put('/message/:id', (req: any, res: any) => {
  res.send('/api/v1/message');
});

router.post('/message', (req: any, res: any) => {
  res.send('/api/v1/message');
});

router.delete('/message/:id', (req: any, res: any) => {
  res.send('/api/v1/message');
});

export { router };
