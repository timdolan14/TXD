import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
query ALL_POSTS {
    post {
      _id
      post
      createdAt
    }
  }
  
`

export const ALL_POSTS_BY_USER = gql`
query ALL_POSTS_BY_USER {
    user {
      _id
      email
      username
      post {
        _id
        post
        createdAt
      }
    }
  }`

export const ALL_USERS = gql`
query ALL_USERS {
    user {
      _id
      email
      username
    }
  }
`
