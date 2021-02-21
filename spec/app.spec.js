process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('/api', () => {

  describe('/search', () => {
    it('GET / returns 200 and an array of albums', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry&type=album')
        .expect(200)
        .then(({ body: { albums} }) => {
          expect(albums.items).to.be.an('array');
          expect(albums).to.contain.keys(
            'href',
            'items',
            'limit',
            'next',
            'offset',
            'previous',
            'total'
          );
        });
    });
    it('GET / returns 200 and an array of artists', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry&type=artist')
        .expect(200)
        .then(({ body: { artists } }) => {
          expect(artists.items).to.be.an('array');
          expect(artists).to.contain.keys(
            'href',
            'items',
            'limit',
            'next',
            'offset',
            'previous',
            'total'
          );
        });
    });
    it('GET / returns 200 and an array of playlists', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry&type=playlist')
        .expect(200)
        .then(({ body: { playlists } }) => {
          expect(playlists.items).to.be.an('array');
          expect(playlists).to.contain.keys(
            'href',
            'items',
            'limit',
            'next',
            'offset',
            'previous',
            'total'
          );
        });
    });
    it('GET / returns 200 and an array of tracks', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry&type=track')
        .expect(200)
        .then(({ body: { tracks } }) => {
          expect(tracks.items).to.be.an('array');
          expect(tracks).to.contain.keys(
            'href',
            'items',
            'limit',
            'next',
            'offset',
            'previous',
            'total'
          );
        });
    });
    it('GET / returns 200 and an array of shows', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry&type=show')
        .expect(200)
        .then(({ body: { shows } }) => {
          expect(shows.items).to.be.an('array');
          expect(shows).to.contain.keys(
            'href',
            'items',
            'limit',
            'next',
            'offset',
            'previous',
            'total'
          );
        });
    });
    it('GET / returns 200 and an array of episodes', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry&type=episode')
        .expect(200)
        .then(({ body: { episodes } }) => {
          expect(episodes.items).to.be.an('array');
          expect(episodes).to.contain.keys(
            'href',
            'items',
            'limit',
            'next',
            'offset',
            'previous',
            'total'
          );
        });
    });
    it('GET / returns 200 and body containing albums, artists and playlists', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry&type=album,artist,playlist')
        .expect(200)
        .then(({ body }) => {
          expect(body).to.contain.keys(
            'albums',
            'artists',
            'playlists',
          );
        });
    });
    it('GET / returns 400 (bad request)', () => {
      return request(app)
        .get('/api/search?type=album,artist,playlist') // missing query param 'q'
        .expect(400);
    });
    it('GET / returns 400 (bad request)', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry') // missing query param 'type'
        .expect(400);
    });
    it('GET / returns 200 and an object with an offset of 20 and previous to be not null', () => {
      return request(app)
        .get('/api/search?q=bryan%20ferry&type=album&offset=20')
        .expect(200)
        .then(({ body: { albums } }) => {
          expect(albums.offset).to.equal(20);
          expect(albums.previous).to.not.equal(null);
        });
    });
  });

});
