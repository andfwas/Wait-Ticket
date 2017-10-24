
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table)=>{
      table.increments().primary()
      table.string('name')
      table.string('email')
      table.string('username')
      table.string('password')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
};
