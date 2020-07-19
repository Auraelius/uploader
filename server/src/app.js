// bring in off-the-shelf components
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('./config');

// connect to local components
const validateBearerToken = require('./validate-bearer-token');
const errorHandler = require('./error-handler');
const usersRouter = require('./users/users-router');


// start building our app
const app = express();

// set up common middleware


// for morgan, we change our logging format based on environment 
app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test'
}));

// Only allow input from our client
app.use(cors({ origin: CLIENT_ORIGIN }));

// Tighten up our use of headers
app.use(helmet());

// now, path-specific endpoints

app.get('/', (req, res) => {
  res.send('Please direct API calls to the /api/v1/... path');
});

// some of our user endpoints are unprotected (so folks can log in anonymously) and some are protected. So we validate tokens internally to this router

app.use('/api/v1/users',usersRouter);

// all other endpoints are protected

app.use(validateBearerToken);

// vvvvv put your routers here 

// ^^^^^ put your routers here

// if we get to this point, either we were given a path we can't match or we've got an error

app.use((req, res) => { 
  res.status(404); 
  res.send('Not found!');
});

// finally, lets catch errors
app.use(errorHandler);

module.exports = app;
