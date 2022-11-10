const express = require('express');
const roundsRouter = require('./rounds/routes');

const apiRouter = express.Router();

apiRouter.use('/rounds', roundsRouter);

module.exports = apiRouter;
