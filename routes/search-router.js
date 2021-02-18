const { searchSpotify } = require('../controllers/search-controller');
const searchRouter = require('express').Router();

searchRouter.route('/').get(searchSpotify);

module.exports = { searchRouter }