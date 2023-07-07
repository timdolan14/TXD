import React from 'react';
import Auth from '../../utils/auth';
import './style.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_POSTS_BY_AUTHOR } from '../../utils/queries';

const ProfilePage = () => {
  const { postAuthor } = useParams();
  const { loading, data } = useQuery(GET_POSTS_BY_AUTHOR, {
    variables: { postAuthor: postAuthor },
  });
  
  const posts = data?.posts || [];

  if (loading) {
    return <p>Loading...</p>;
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
        </>
      ) : (
        <p>
          You need to be logged in to view your posts. Please <Link to="/login">Login</Link> or <Link to="/register">Sign Up.</Link>
        </p>
      )}
    </div>
  );
};

export default ProfilePage;
