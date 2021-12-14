/**
 * A resolver's mission is to populate the data for a field in your schema.
 * A resolver is a function. It has the same name as the field that it populates
 * data for. It can fetch data from any data source, then transforms that data 
 * into the shape your client requires.
 */

/**
 * Each resolver function takes in 4 params, like so:
 * 
 *   tracksForHome: (parent, args, context, info) => {},
 * 
 * The order of the params matter here. If we're not using any of the params,
 * we can replace them with underscores (_).
 */

const resolvers = {
  Query: { // indicates it's for the Query type in our schema
    /**
     * Returns an array of Tracks that will be used to populate 
     * the homepage grid of our web client.
     */
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: { // indicates it's for the Track type in our schema
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  }
};

module.exports = resolvers;