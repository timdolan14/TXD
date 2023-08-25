import React from 'react';
import Auth from '../../utils/auth';
import './style.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POSTS_BY_AUTHOR } from '../../utils/queries';

const ProfilePage = () => {

  const loggedInUser = Auth.getProfile().data.username;
  const { loading, error, data } = useQuery(GET_POSTS_BY_AUTHOR, {
    variables: { username: loggedInUser },
  });

  const posts = data?.user?.posts || [];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>Error loading posts.</p>;
  }

  return (
    <div className="profile-page">
      {Auth.loggedIn() ? (
        <>
          {posts && posts.map((post) => (
            <div key={post._id} className="card mb-3 post-card">
              <h3 className="profile-page-heading">{post.postAuthor}</h3>
              <h4 className="card-header text-light p-2 m-0 post-author">
                {post.postAuthor} <br />
                <span className="post-date">
                  Posted at {post.createdAt}
                </span>
              </h4>
              <p className="card-body bg-light p-2 post-text">{post.postText}</p>
            </div>
          ))}
          {/* Additional elements for the profile page */}
          <div className="profile-info">
            <h2>{loggedInUser}</h2>
            {/* Future Styling */}
          </div>
          <div className="post-form-container">
            {/* Future Styling */}
          </div>
        </>
      ) : (
        <p className='profile-login'>
          You need to be logged in to view your posts. Please <Link to="/login">Login</Link> or <Link to="/register">Sign Up.</Link>
        </p>
      )}
    </div>
  );
};

export default ProfilePage;
