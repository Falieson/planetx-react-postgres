// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: 'postgres://falieson@localhost:5432/ULT1706',
  migrations: {
    directory: __dirname + "/db/migrations",
    tableName: 'migrations',
  },
  debug: true,
  pool: {
    min: 2,
    max: 10
  },
};
