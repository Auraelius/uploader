// modify our process environment for testng 
process.env.TZ = 'UTC';
process.env.NODE_ENV = 'test';

// bring in our components 
require('dotenv').config();
const { expect } = require('chai');
const supertest = require('supertest');

// populate globals
global.expect = expect;
global.supertest = supertest;