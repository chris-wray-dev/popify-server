const request = require('request');
const { credentials: { CLIENT_ID, CLIENT_SECRET} } = require('../credentials');

exports.searchSpotify = (req, res, next) => {
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

  console.log("Awaiting auth token...");
  
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("Auth token obtained...");
      const token = body.access_token;
      const options = {
        url: 'https://api.spotify.com/v1/search',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        qs: { ...req.query },
        json: true
      }
      request.get(options, function(error, response, body) {
        if (response.statusCode === 200) {
          res.status(200).send(body)
        } else if (response.statusCode === 400) {
          res.status(400).send({ msg: "Bad request"})
        }
      });
    } else if (error) {
      res.status(402).send({ msg: "Unauthorized"})
      next(error)
    }
  });

}
