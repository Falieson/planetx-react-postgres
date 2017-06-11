<!-- migrate documentation to github wiki -->

# KNEX CLI INSTALL 
```
$ npm install --global knex     # yarn global add knex
```

# KNEX SUMMARY

## migrations

- create a db migration: `$ knex migrate:make counters`
- sync db to latest schema: `$ knex migrate:latest`

## seeds

- create a db seed: `$ knex seed:make counters`
- seed db: `$ knex seed:run`



# KNEX INFO
knex is an ORM for SQL dbs (postgres, mysql, etc)
bookshelf is supposedly an improvement on knex, but its currently removed until I have a usecase for it.