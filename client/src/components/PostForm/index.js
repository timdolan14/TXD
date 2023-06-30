import React from 'react';
import { Link } from 'react-router-dom';

const PostForm = ({ posts }) => {
    return (
        <div>
            {posts && posts.map((posts) => (
                <div key={posts._id}>
                    <p>{posts.post}</p>
                    <Link to={"/home"}>
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default PostForm;