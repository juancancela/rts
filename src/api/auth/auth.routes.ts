const express = require('express');
const router = express.Router();

router.get('/auth', (req: any, res: any) => {
  res.send('/api/v1/auth');
});

export { router };