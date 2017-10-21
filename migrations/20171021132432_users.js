
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table)=>{
      table.increments()
      table.string('fname')
      table.string('lname')
      table.string('email')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
};
