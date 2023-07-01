import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { ALL_POSTS } from '../../utils/queries';
import Auth from '../../utils/auth';
import './style.css'


const Post = () => {
  const [post, setPost] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [addPost] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { post: posts } = cache.readQuery({ query: ALL_POSTS });

        cache.writeQuery({
          query: ALL_POSTS,
          data: { post: [addPost, ...post] },
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
          post: post,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPost('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;
  
    if (inputType === 'text') {
      if (inputValue === '') {
        setErrorMessage('Message is required!')
        return setText(inputValue);
      } else setErrorMessage('Thank you for the message!')
    }
  };
  
  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <div>
            <form className="post-form">
              <div className="form-message mb-3">
                <label htmlFor="messageFormControlInput">Message</label>
                <input type="text" name="text" className="form-control" id="messageFormControlInput" rows="4" onChange={handleChange}></input>
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
        <p>
          You need to be logged in to share your posts. Please <Link to="/login">login</Link> or <Link to="/register">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Post;
