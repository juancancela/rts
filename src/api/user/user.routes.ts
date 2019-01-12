const express = require('express');
const router = express.Router();
import {mockedData} from './mockedTrendingData';

router.get('/user', (req: any, res: any) => {
  res.send('/api/v1/user');
});

router.get('/trending', (req: any, res: any) => {
  res.send(mockedData);
});

export { router };
