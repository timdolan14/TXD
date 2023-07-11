import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';


import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const [addComment] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'commentText') {
      setCommentText(value);
    }
  };

  return (
    <div>
      <h4>Comments?</h4>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please
          <Link to="/login">Login</Link> or <Link to="/register">Sign Up.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
