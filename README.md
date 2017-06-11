Ultimate React Boilerplate 2017 | PlanetX
======

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
---

Found Universal Redux Example w/ Postgres/Knex
------
<!-- meta-description -->

---

## Next

### New Counters feature: Postgres CRUD
- countersSqlApp becomes available at new route '/counters-postgres'
- countersSqlApp uses redux to optimistically CRUD the database
- countersSqlApp can CRUD the database

## History

### Redux Thunk Counter
- countersApp becomes available at new route '/counters'
- countersApp attaches its store to the redux-store

### Started w/ Found example for universal-redux
server-side rendering for the initial page load and a custom redux store

- redux store is initially populated on the server
- then the client rehydrates itself with the server's state.


## Docs
```
  docs/psql-setup.md - install pg & redis
```


## Usage

```
$ npm i
$ npm run db:setup    # yarn db:setup
$ npm start           # yarn start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.


## Development
Start by reviewing the documentation in /docs/ (which will be moved to the github wiki)


### Create a Commit
This project uses commitizen and gitflow, for more about contributing checkout the wiki page!
```
$ npm run commit      # yarn commit
```

### Setup
**Either run `db:setupComplete` or each of the commands below**

Create the database in the postgres server

```
$ npm run db:setup    # yarn db:setup
```

Sync the datbase to the latest migration
```
$ npm run db:latest    # yarn db:latest
```

Seed the database
```
$ npm run db:seed    # yarn db:seed
```
