/* 
  ! This is completely bogus!!! :-)

  This is a partial implementation of token-based authentication that is used as the early stages of learning authentication techniques in a code school curriculum. It is not secure. It is not flexible. But this project is expected to be used by students at that particular stage of the curriculum. They learn JWT later. But even then, it is not required in their capstone projects, which focus on many other techniques.

  So, if you have an entry in the user table and you login, you are given our one and only token. If you don't have an entry and you register, you are given the same token. Pretty much anybody gets the damn token.

  We want students to begin protecting endpoints but we don't want to require them to use a strong user & authentication mechanism. So this is all we need for now

*/

const { API_TOKEN } = require('./config');
const logger = require('./logger');

function validateBearerToken(req, res, next) {
  const authToken = req.get('Authorization');
  logger.error(`Unauthorized request to path: ${req.path}`);

  if (!authToken || authToken.split(' ')[1] !== API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }

  next();
}

module.exports = validateBearerToken;