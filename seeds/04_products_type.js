
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('products_type').insert([
        {id: 1, name: 'Roteador'},
        {id: 2, name: 'Onu Bridge'},
        {id: 3, name: 'Onu Router'},
        {id: 4, name: 'Onu Router WiFi'}
      ]);
    });
};
