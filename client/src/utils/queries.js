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
    comments {
      _id
      commentText
      createdAt
    }
  }
}
`

export const GET_POSTS_BY_AUTHOR = gql`
query GET_POSTS_BY_AUTHOR($username: String!) {
  user(username: $username) {
    _id
    username
    posts {
      _id
      postText
      postAuthor
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
}
`;
