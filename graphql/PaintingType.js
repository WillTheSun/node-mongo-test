const graphql = require('graphql')

const { GraphqQLObjectType, GraphQLString } = graphql

const PaintingType = new GraphqQLObjectType({
  name: 'Painting',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    url: { type: GraphQLString }.
    techniques: { type: GraphQLString[] }
  })
})

module.exports = PaintingType
