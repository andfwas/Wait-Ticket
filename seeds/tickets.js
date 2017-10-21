
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          code: 'kjfadkjfa',
          zipcode: '80204',
          ticket_id: '3456789'
        },
        {
          code: 'iuspodfuioa',
          zipcode: '80204',
          ticket_id: '3456789'
        }
      ]);
    });
};
