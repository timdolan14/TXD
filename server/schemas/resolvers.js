const { AuthenticationError } = require('apollo-server-express');
const { Post, User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        post: async () => {
            return Post.find().sort({ createdAt: -1 });
        },
        user: async () => {
            return await User.find();

        },
        postTag: async (parent, args) => {
            return await Post.find({ tag: tag })
        }
    },

    Mutation: {
        addUser: async (parent, { username, email ,password }) => {
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
        addPost: async (parent, { post }) => {
            return Post.create({ post });
        },
    }
};

module.exports = resolvers;