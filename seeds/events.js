
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          title: 'Denver Broncos',
          sub_title: 'New England Patriots at Denver Broncos',
          zipcode: '80204',
          time: '18:30',
          date: '11/12/17',
          event_id: '3456789'
        }
      ]);
    });
};
