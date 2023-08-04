import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { ALL_POSTS } from '../../utils/queries';
import Auth from '../../utils/auth';
import './style.css'


const PostForm = () => {
  const [postText, setPostText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: ALL_POSTS });

        cache.writeQuery({
          query: ALL_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'postText') {
      setPostText(value);
    }
  };
  
  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <div>
            <form className="post-form" onSubmit={handleFormSubmit}>
              <div className="form-message mb-3">
                <label htmlFor="messageFormControlInput">Message</label>
                <textarea type="text" name="postText" className="form-control" id="messageFormControlInput" rows="4" value={postText} onChange={handleChange}></textarea>
              </div>
              <div className="form-submit-btn mb-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </>
      ) : (
        <p className='post-login'>
          You need to be logged in to share your posts. Please <Link to="/login">Login</Link> or <Link to="/register">Sign Up.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
