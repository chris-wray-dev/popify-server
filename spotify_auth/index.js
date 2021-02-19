const request = require('request');
const { credentials: { CLIENT_ID, CLIENT_SECRET} } = require('../credentials');

const requestToken = () => {

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  const auth = {
    token: null,
    error: null
  }

  console.log("Awaiting auth token...");
  
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("Auth token obtained...");
      auth.token = body;
    } else if (error) {
      auth.error = error
    }
  });

  return auth;

}

module.exports = { requestToken }
