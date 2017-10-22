
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events', (table)=>{
      table.increments()
      table.integer('zipcode')
      table.string('title')
      table.string('sub_title')
      table.time('time')
      table.date('date')
      table.integer('event_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('events')
};
