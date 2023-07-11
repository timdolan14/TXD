import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';

import { SINGLE_POST } from '../../utils/queries';

import './single.css'

const SinglePost = () => {
    const { postId } = useParams();
    const { loading, data } = useQuery(SINGLE_POST, {
        variables: { postId: postId },
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="my-3">
            <h3 className="card-header text-light p-2 m-0">
                {post.postAuthor} <br />
                <span>
                    Posted at {post.createdAt}
                </span>
            </h3>
            <div className="bg-light py-4">
                <blockquote
                    className="p-4"
                >
                    {post.postText}
                </blockquote>
            </div>
            <div className="my-5">
                <CommentList comments={post.comments} />
            </div>
            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm postId={post._id} />
            </div>
        </div>
    );
};

export default SinglePost;