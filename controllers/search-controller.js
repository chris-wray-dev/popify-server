const axios = require('axios');

exports.searchSpotify = (req, res, next) => {
  const { auth } = req;

  const requestOptions = {
    headers: {
      "Authorization": `Bearer ${auth.access_token}`,
      "Accept": 'application/json',
      "Content-Type": 'application/json',
    },
    params: {
      q: "Billy",
      type: "album"
    }
  }

  axios.get('https://api.spotify.com/v1/search', requestOptions)
    .then(results => {
      res.status(200).send(results.data);
    })
    .catch(err => {
      console.log(err)
    })

}
