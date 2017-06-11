// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: 'postgres://postgres@localhost:5432/ult1706',
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
