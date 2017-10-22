
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          fname: 'john',
          lname: 'doe',
          email: 'johndoe@gmail.com'
        },
        {
          fname: 'jane',
          lname: 'doe',
          email: 'janedoe@gmail.com'
        }
      ]);
    });
};
