const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            trim: true
        },
        postAuthor: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        },
        likes: {
            type: Boolean,
            default: 0,
        },
        tag: [{
            type: String,
        }],
        comments: [
            {
                commentText: {
                    type: String,
                    required: true,
                },
                commentAuthor: {
                    type: String,
                    required: true,
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (timestamp) => dateFormat(timestamp)
                },
            }
        ]

    }
);

const Post = model('Post', postSchema);

module.exports = Post;