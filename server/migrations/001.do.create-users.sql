CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  date_created TIMESTAMPTZ DEFAULT now() NOT NULL
);