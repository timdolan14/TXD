const db = require('../config/connection');
const { Post, User } = require('../models');
const postData = require('./postData.json');
const userData = require('./user.json');


db.once('open', async () => {
  try {
    await Post.deleteMany({});
    await User.deleteMany({});
    await User.create(userData);

    for (let i = 0; i < postData.length; i++) {
      const { _id, postAuthor } = await Post.create(postData[i]);
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('completed!');
  process.exit(0);
});