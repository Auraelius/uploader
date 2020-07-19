module.exports = {
  EXPRESS_SERVER_PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://project_admin@localhost/project_database',
};