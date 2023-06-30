import React from 'react';
// import { Link } from "react-router-dom";
// import Auth from '../../utils/auth';

const PostList = ({ posts }) => {

    return (
        <div>
            <h3>Insert Username</h3>
                    <div key={posts._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                            <br />
                            <span style={{ fontSize: '1rem' }}>
                                Posted at {posts.createdAt}
                            </span>
                        </h4>
                        <div key={posts._id}>
                            <p className="card-body bg-light p-2">
                                {posts.post}
                                </p>
                        </div>
                    </div>
        </div>
    );
};

export default PostList;