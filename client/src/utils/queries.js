import { gql } from "@apollo/client";

export const GET_USER = gql`
query GET_USER($username: String!) {
  user(username: $username) {
    _id
    username
    email
    post {
      _id
      post
      createdAt
    }
  }
}
`
export const ALL_POSTS = gql`
query GET_POSTS {
  posts {
    _id
    post
    postAuthor
    createdAt
  }
}`

export const SINGLE_POST = gql`
query Query($postId: ID!) {
  post(postId: $postId) {
    _id
    post
    postAuthor
    createdAt
  }
}
`
