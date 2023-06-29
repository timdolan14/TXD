import React from 'react';
import { useQuery } from "@apollo/client";

import PostForm from "../components/PostForm";

import { ALL_POSTS } from '../utils/queries';
// import { useState } from 'react';

const Home = () => {
    const { data } = useQuery(ALL_POSTS);
    const post = data?.post || [];
    console.log(post)

    return (
        <div>
            <h1>Test</h1>
           <PostForm
              posts={post}
            />
            
        </div>
    )
}

export default Home;