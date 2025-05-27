mport { ApolloServer, gql } from 'apollo-server-micro';

// Define your GraphQL type definitions here
const typeDefs = gql`
  type BlogPost {
    id: ID!
    title: String!
    content: String
  }

  type Query {
    blogPosts: [BlogPost]
  }
`;

// Define your resolvers here
const resolvers = {
  Query: {
    blogPosts: () => {
      // Fetch blog posts from Strapi
      return fetch('http://localhost:1337/api/blog-posts')
        .then((res) => res.json())
        .then((data) => {
          return data.data.map((item: any) => ({
            id: item.id,
            title: item.attributes.title,
            content: item.attributes.content,
          }));
        });
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
