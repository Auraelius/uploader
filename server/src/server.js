const knex = require('knex');
const app = require('./app');
const { EXPRESS_SERVER_PORT, DB_URL } = require('./config');

// make a database connection for the whole app
const db = knex({
  client: 'pg',
  connection: DB_URL,
});

// make the connection available to the rest of the app
app.set('db', db);

app.listen(EXPRESS_SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${EXPRESS_SERVER_PORT}`);
});