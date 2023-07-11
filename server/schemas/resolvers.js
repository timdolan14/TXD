const { AuthenticationError } = require('apollo-server-express');
const { Post, User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('posts');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('posts');
        },
        posts: async (parent, { postAuthor }) => {
            const params = postAuthor ? { postAuthor } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, { postText, postAuthor }) => {
            const newPost = await Post.create({ postText, postAuthor });

            await User.findOneAndUpdate(
                { username: postAuthor },
                { $addToSet: { posts: newPost._id } }
            );

            return newPost;
        },
        addComment: async (parent, { postId, commentText, commentAuthor }) => {
            return Post.findOneAndUpdate(
                { _id: postId },
                {
                    $addToSet: { comments: { commentText, commentAuthor } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        // removeComment: async (parent, { postId, commentId }) => {
        //     return Post.findOneAndUpdate(
        //         { _id: postId },
        //         { $pull: { comments: { _id: commentId } } },
        //         { new: true }
        //     );
        // },
    }
};

module.exports = resolvers;