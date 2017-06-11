<!-- migrate documentation to github wiki -->

# POSTGRES
$ brew cask install postgresql
$ brew services start postgresql

**reload your shell**

$ createuser -P postgres
$ npm run db:setup # yarn db:setup

**error: psql: FATAL:  database "<user>" does not exist**

$ createdb
$ npm run db:setup # yarn db:setup


# REDIS setup
$ brew cask install redis
$ brew services start redis

