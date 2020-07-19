/* 
  * error handling middleware

  env: development or test
  we want to log errors in detail and interactively to the console and to a file

  env: production
  we want to log less detailed (but still actionable) info to file
  but nothing to console.


*/

const { NODE_ENV } = require('./config');
const logger = require('./logger');


// we need four arguments but we won't use next()
// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    logger.error(error.message); // also console.logs the message
    response = { message: error.message, error };
  }
  res.status(500).json(response);
}

module.exports = errorHandler;