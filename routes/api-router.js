const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
  console.log(req)
  res.status(200).send("Welcome to the Popify server...")
});

module.exports = apiRouter;

// use the access token to access the Spotify Web API
// var token = body.access_token;
// var options = {
//   url: 'https://api.spotify.com/v1/users/jmperezperez',
//   headers: {
//     'Authorization': 'Bearer ' + token
//   },
//   json: true
// };
// request.get(options, function(error, response, body) {
//   console.log(body);
// });