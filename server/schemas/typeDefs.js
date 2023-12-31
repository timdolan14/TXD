const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  password: String
  email: String
  posts:[Post]!
}

type Post {
    _id: ID
    postText: String
    postAuthor: String
    likes: Boolean
    createdAt: String
    tag: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
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
  }

  type Mutation {
    addUser(email: String! username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    addComment(
      postId: ID!
      commentText: String!
      commentAuthor: String!
    ): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;