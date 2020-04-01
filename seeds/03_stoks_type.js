
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stoks_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('stoks_type').insert([
        {id: 1, name: 'Geral'},
        {id: 2, name: 'Descarte'},
        {id: 3, name: 'Bancada'},
        {id: 4, name: 'Cliente'}
      ]);
    });
};
