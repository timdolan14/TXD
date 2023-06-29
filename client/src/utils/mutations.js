import { gql } from "@apollo/client";

export const NEW_USER = gql`
mutation NEW_USER ($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password) {
      user {
        _id
        email
        password
      }
      token
    }
  }
`
export const LOGIN = gql`
mutation LOGIN ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        email
        username
        password
      }
      token
    }
  }
`

export const ADD_POST= gql `
mutation ADD_POST ($post: String!) {
    addPost(post: $post) {
      _id
      post
    }
  }
`