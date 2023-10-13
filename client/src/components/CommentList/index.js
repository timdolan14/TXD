import React from 'react';
import './style.css';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div className="comment-list">
      <h3>Comments</h3>
      <div className="flex-row my-4">
        {comments && comments.map((comment) => (
          <div key={comment._id} className="comment-card">
            <div className="comment-header">
              <h5>
                {comment.commentAuthor} commented {' '}
                <span>{comment.createdAt}</span>
              </h5>
            </div>
            <div className="comment-body">
              <p>{comment.commentText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
