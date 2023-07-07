import { gql } from "@apollo/client";

export const GET_USER = gql`
query GET_USER($username: String!) {
  user(username: $username) {
    _id
    username
    email
    posts {
      _id
      postText
      createdAt
    }
  }
}
`
export const ALL_POSTS = gql`
query GET_POSTS {
  posts {
    _id
    postText
    postAuthor
    createdAt
  }
}`

export const SINGLE_POST = gql`
query Query($postId: ID!) {
  post(postId: $postId) {
    _id
    postText
    postAuthor
    createdAt
  }
}
`
