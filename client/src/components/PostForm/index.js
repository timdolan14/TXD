import React from 'react';
// import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {

    return (
        <div>
            <h3>Tests</h3>
            {posts && posts.map((posts) => (
                    <div key={posts._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                            <br />
                            <span style={{ fontSize: '1rem' }}>
                                had this thought on {posts.createdAt}
                            </span>
                        </h4>
                        <div className="card-body bg-light p-2">
                            <p>{posts.post}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostList;