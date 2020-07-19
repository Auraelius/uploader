# DANGER
# THIS DEVELOPMENT ENVIRONMENT DOES NOT USE PASSWORDS 
# THIS IS A BAD IDEA

# to run this script,
#  
# 0. make sure your database engine is running
# 1. change 'project_admin' to your role's name and change 'project_database' to your database's name
#
# 2 make sure this role and databases do not already exist
# 
# 3. make sure the file has the execution bit set
# $ chmod u+x setup-database.sh

# 4. and then run it from your command shell
# $ ./setup-database.sh

createuser -s -w project_admin
createdb -w -U project_admin project_database
createdb -w -U project_admin project_database-test


# These environment variables will be redefined by your login dot files the next time you spawn a shell or login, depending on which dotfiles you use to define these environment variables. While you are working on this project, you might want to update your login dot files.

export PGUSER=project_admin
export PGDATABASE=project_database

# Recall that once your .env sets up your environment variables, you can start psql in the correct place with the correct role just by using your connection string environment variable.

# $ psql $DB_URL