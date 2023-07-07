import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './style.css';

const PostList = ({ posts }) => {
  if (!posts) {
    return <h3>No Posts Yet</h3>;
  }
  return (
    <div className="post-list">
      {Auth.loggedIn() ? (
        <>
          <h3 className="post-list-heading">What's Going On in Your Area?</h3>
          {posts && posts.map((post) => (
            <div key={post._id} className="card mb-3 post-card">
              <h4 className="card-header text-light p-2 m-0 post-author">
                {post.postAuthor} <br />
                <span className="post-date">
                  Posted at {post.createdAt}
                </span>
              </h4>
              <p className="card-body bg-light p-2 post-text">{post.postText}</p>
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/post/${post._id}`}>
                View Post
              </Link>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
  
};

export default PostList;
