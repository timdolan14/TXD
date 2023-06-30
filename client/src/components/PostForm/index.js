import React from 'react';
import { Link } from 'react-router-dom';

const PostForm = ({ posts }) => {
    return (
        <Link to={"/home"}>
        <div>
            {posts && posts.map((posts) => (
                <div key={posts._id}>
                    <p>{posts.post}</p>
                </div>
            ))}
        </div>
        </Link>
    )
}

export default PostForm;