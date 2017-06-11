// id - text
// name - text
// value - integer
// createdAt - datetime


exports.up = function(db, Promise) {
  return db.schema.createTable('counters', (table)=> {
    table.increments()
    table.text('name')
    table.integer('value').notNullable()
    table.dateTime('updatedAt').notNullable()  // .default(new Date())
  })
  
};

exports.down = function(db, Promise) {
  return db.schema.dropTable('counters')  
};
