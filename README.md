# Getting Started with Popify

1.  Clone the repo onto your local machine using command line "git clone https://github.com/chris-wray-dev/popify-server"
2.  CD into the popify-server directory and run command "npm install".
3.  Once the node packages are install you can spin the server up by entering 'npm start' at the command line.

## Synopsis

This server provides access to the Spotify search API.  There is only one endpoint and that is a GET request at /api/search.  There are two required query params which you must provide which are the search term 'q' and you must provide at least one 'type'.  Valid types are: album , artist, playlist, track, show and episode and should be provided as a comma-separated string with no spaces.

There are other query params which are optional and these are: market, limit, offest and include_external.  Details off all these are available over at the Spotify docs https://developer.spotify.com/documentation/web-api/reference/#category-search

### Testing

Testing has been carried out using Mocha, Chai and Supertest.  These tests are in spec/app.spec.js and can be run from the command line using 'npm test'.  Tests cover most possibilities but focus mainly on testing for the correct data types with the correct keys are returned.
