This is the express/postgres server boilerplate


to use:

## Setup 1. install node modules

## Setup 2. set up your database

This means: globally replace these strings with your database role and name

For example:
* project_admin -> uploader_admin
* project_database -> uploader

be sure the strings are changed in these files:

* .env
* setup-database.sh
* src/config.js
* setup-database.sh

Then run setup-database.sh

## Setup 3. Run the migrations
## Setup 4. Run the seed scripts
## Setup 5. Run the tests