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

export const ADD_POST = gql `
mutation NEW_POST($post: String!, $postAuthor: String!) {
  addPost(post: $post, postAuthor: $postAuthor) {
    _id
    post
    postAuthor
    createdAt
  }
}
`