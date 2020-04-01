
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {id: 1, name: 'client01' , doc: '20140354895', is_stok: true},
        {id: 2, name: 'client02' , doc: '35014268752', is_stok: false},
        {id: 3, name: 'client03' , doc: '20414709698', is_stok: true},
        {id: 4, name: 'client04' , doc: '01019184287', is_stok: true},
        {id: 5, name: 'client05' , doc: '25803740038', is_stok: false},
        {id: 6, name: 'client06' , doc: '95514474103', is_stok: true},
        {id: 7, name: 'client07' , doc: '14167979818', is_stok: true},
        {id: 8, name: 'client08' , doc: '25056351956', is_stok: false},
        {id: 9, name: 'client09' , doc: '56449120159', is_stok: true}
      ]);
    });
};
