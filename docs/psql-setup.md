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


## POSTGRES: COMMANDS
### POSTGRES: SERVICE COMMANDS
- install service: brew cask install postgresql
- start service: brew services start postgresql
- restart the service: `brew services restart postgresql`

### POSTGRES: SERVER COMMANDS
- create a user: `createuser -P <username>`
- create a database: `createdb <dbname>`

# REDIS setup
```
$ brew cask install redis
$ brew services start redis
```