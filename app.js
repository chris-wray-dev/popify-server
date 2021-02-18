const express = require('express');
const app = express();
const apiRouter = require('./routes/api-router');
const cors = require('cors');
const { requestToken } = require('./spotify_auth');

const start_up = async () => {
  try {
    const auth = await requestToken();
    app.use(cors());
    app.use(express.json());

    const addToken = (req, res, next) => {
      req.auth_token = auth.token;
      next();
    }
    app.use(addToken);
    app.use('/api', apiRouter);

  } catch (ex) {
    console.log('error getting token: ', ex.message);
  }
}

start_up();

module.exports = app;