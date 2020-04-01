
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('stoks').del()
        .then(function () {
            // Inserts seed entries
            return knex('stoks').insert([
                {id: 1, name: 'Estoque Central' , stok_type_id: 1 },
                {id: 2, name: 'client01' , stok_type_id: 4, client_id: 1},
                {id: 3, name: 'client03' , stok_type_id: 4, client_id: 3 },
                {id: 4, name: 'client04' , stok_type_id: 4, client_id: 4 },
                {id: 5, name: 'client06' , stok_type_id: 4, client_id: 6 },
                {id: 6, name: 'client07' , stok_type_id: 4, client_id: 7 },
                {id: 7, name: 'client09' , stok_type_id: 4, client_id: 9 },
                {id: 8, name: 'teste 01' , stok_type_id: 3 },
                {id: 9, name: 'teste 02' , stok_type_id: 3 },
                {id: 10, name: 'box 01' , stok_type_id: 2 }
      ]);
    });
};
