
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tickets', (table)=>{
      table.increments()
      table.string('code')
      table.integer('zipcode')
      table.integer('ticket_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('tickets')
};
