/**
 * The RESTDataSource class provides helper methods for HTTP requests. 
 * https://www.apollographql.com/docs/apollo-server/data/data-sources/#http-methods
 */
const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

module.exports = TrackAPI;