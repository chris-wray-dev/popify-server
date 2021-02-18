const request = require('request');
const { credentials: { CLIENT_ID, CLIENT_SECRET} } = require('../credentials');

const requestToken = () => {

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
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
  
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      auth.token = body;
    } else if (error) {
      auth.error = error
    }
  });

  return auth;

}

module.exports = { requestToken }
