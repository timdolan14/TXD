import React from 'react';
import { useQuery } from "@apollo/client";

import Dashboard from "../components/Dashboard";
import PostForm from "../components/PostForm";
import Post from "../components/Post";

import { ALL_POSTS } from '../utils/queries';
import Profile from './Profile';
// import { useState } from 'react';

const Home = () => {
    const { data } = useQuery(ALL_POSTS);
    const post = data?.post || [];
    console.log(post)

    return (
        <div>
           <Dashboard/>
           <Post/>
           <PostForm/>
        </div>
    )
}

export default Home;