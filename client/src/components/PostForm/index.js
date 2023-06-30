import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { ALL_POSTS } from '../../utils/queries';
import Auth from '../../utils/auth';

const Post = () => {
  const [post, setPost] = useState('');

  const [addPost] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { post: posts } = cache.readQuery({ query: ALL_POSTS });

        cache.writeQuery({
          query: ALL_POSTS,
          data: { post: [addPost, ...post] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPost({
        variables: {
          post: post,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPost('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'post') {
      setPost(value);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">What's on your mind?</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly within your area so be careful what you share.
                </p>
                <div>
                  <div className="col-span-full">
                    <label htmlFor="post" className="block text-sm font-medium leading-6 text-gray-900">
                      Post
                    </label>
                    <div className="mt-2">
                      <textarea
                        onChange={handleChange}
                        id="post"
                        name="post"
                        value={post}
                        rows={5}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Are you ready to meet your new best friend?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your posts. Please <Link to="/login">login</Link> or <Link to="/register">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Post;
