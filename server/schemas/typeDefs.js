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
    user: [User]!
    post: [Post]
    postTag(tag: String): [Post]
    Post(PostId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(email: String! username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addPost(post: String!): Post
    addComment(PostId: ID!, commentText: String!): Post
    removePost(PostId: ID!): Post
    removeComment(PostId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;