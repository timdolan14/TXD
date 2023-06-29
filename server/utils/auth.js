const jwt = require('jsonwebtoken');

const secret = 'jsonwebtokenshhhh';
const expiration = '1h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
