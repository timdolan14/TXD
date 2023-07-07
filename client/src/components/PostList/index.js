import React from 'react';
import Auth from '../../utils/auth';

const postList = ({ posts }) => {
  if (!posts) {
    return <h3>No Posts Yet</h3>;
  }
  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <h3>How Does Your Area Look?</h3>
          {posts && posts.map((post) => (
            <div key={post._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {post.postAuthor} <br />
                <span style={{ fontSize: '1rem' }}>
                  Posted at {post.createdAt}
                </span>
              </h4>
              <p className="card-body bg-light p-2">{post.postText}</p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default postList;
