import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POSTS_BY_AUTHOR } from '../utils/queries';

import Header from '../components/Header';
import NavTab from '../components/NavTab';
import ProfilePage from '../components/ProfilePage';

const Profile = () => {
    const { postAuthor } = useParams();
    const { data } = useQuery(GET_POSTS_BY_AUTHOR, {
        variables: { postAuthor: postAuthor },
      });
      const posts = data?.posts || [];
    console.log(postAuthor);

    return (
        <div>
            <Header />
            <NavTab />
            <ProfilePage
              posts={posts}
              title="Your Posts"
               />
        </div>
    )
}

export default Profile;