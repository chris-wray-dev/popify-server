const apiRouter = require('express').Router();
const { searchRouter } = require('./search-router');

apiRouter.get('/', (req, res, next) => {
  res.status(200).send("Welcome to the Popify server...")
});

apiRouter.use('/search', searchRouter)

module.exports = apiRouter;
