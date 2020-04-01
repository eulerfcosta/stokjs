
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'users01' , email: 'users01@email.com' , password:'123456'},
        {id: 2, name: 'users02' , email: 'users01@email.com' , password:'123456'},
        {id: 3, name: 'users03' , email: 'users01@email.com' , password:'123456'}
      ]);
    });
};
