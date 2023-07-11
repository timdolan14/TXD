import { gql } from "@apollo/client";

export const NEW_USER = gql`
mutation NEW_USER($email: String!, $username: String!, $password: String!) {
  addUser(email: $email, username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`
export const LOGIN_USER = gql`
mutation LOGIN_USER($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`

export const ADD_POST = gql`
mutation ADD_POST($postText: String!, $postAuthor: String!) {
  addPost(postText: $postText, postAuthor: $postAuthor) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentText
    }
  }
}
`

export const ADD_COMMENT = gql`
  mutation addComment(
    $postId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      postId: $postId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;