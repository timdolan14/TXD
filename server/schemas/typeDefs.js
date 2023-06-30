const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  password: String
  email: String
  post:[Post]!
}

type Post {
    _id: ID
    post: String
    postAuthor: String
    likes: Boolean
    createdAt: String
    tag: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    comment: String
    commentAuthor: String
    createdAt: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    postTag(tag: String): [Post]
    Post(PostId: ID!): Post
  }

  type Mutation {
    addUser(email: String! username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addPost(post: String!, postAuthor: String!): Post
  }
`;

module.exports = typeDefs;