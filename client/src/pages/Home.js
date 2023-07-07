import React from 'react';
import { useQuery } from "@apollo/client";

import NavTab from "../components/NavTab";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Header from "../components/Header";


import { ALL_POSTS } from '../utils/queries';

// import { useState } from 'react';

const Home = () => {
    const { data } = useQuery(ALL_POSTS);
    const posts = data?.posts || [];
    console.log(posts);
    return (
        <div>
            <Header />
            <NavTab />
            <PostForm />
            <PostList
              posts={posts}
              title="Check this out!"
            />
        </div>
    )
}

export default Home;