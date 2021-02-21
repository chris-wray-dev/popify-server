const express = require('express');
const app = express();
const apiRouter = require('./routes/api-router');
const cors = require('cors');
// const { requestToken } = require('./spotify_auth');

// try {
//   const auth = requestToken();
  
  app.use(cors());
  app.use(express.json());

  // const addToken = (req, res, next) => {
  //   req.auth = auth.token;
  //   next();
  // }
  
  // app.use(addToken);
  app.use('/api', apiRouter);

// } catch (ex) {
//   console.log('Error getting Auth token: ', ex.message);
// }

module.exports = app;