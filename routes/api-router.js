const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
  res.status(200).send("Welcome to the Popify server...")
});

module.exports = apiRouter;