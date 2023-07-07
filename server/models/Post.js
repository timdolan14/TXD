const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true
        },
        postAuthor: {
            type: String,
            required: true,
            trim: true,
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
                comment: {
                    type: String,
                    required: true,
                    minlength: 1,
                    maxlength: 30,

                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (timestamp) => dateFormat(timestamp)
                },
                commentAuthor: {
                    type: String,
                    ref: `User`,
                    required: true,
                }
            }
        ]

    }
);

const Post = model('Post', postSchema);

module.exports = Post;