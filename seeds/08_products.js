
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('products').del()
        .then(function () {
            // Inserts seed entries
            return knex('products').insert([
                {id: 1, name: 'D-Link 610',
                    products_type_id: 1
                },
                {id: 2, name: 'D-Link 615',
                    products_type_id: 1
                },
                {id: 3, name: 'TP-Link TL-WR940N',
                    products_type_id: 1
                },
                {id: 4, name: 'TP-Link TL-WR845N',
                    products_type_id: 1
                },
                {id: 5, name: 'TP-Link Archer C6',
                    products_type_id: 1
                },
                {id: 6, name: 'TP-Link Archer C5400',
                    products_type_id: 1
                },
                {id: 7, name: 'TP-Link Archer C7',
                    products_type_id: 1
                },
                {id: 8, name: 'Itelbras IWR 300N',
                    products_type_id: 1
                },
                {id: 9, name: 'Itelbras RF 301K',
                    products_type_id: 1
                },
                {id: 10, name: 'Itelbras ACtion RF 1200',
                    products_type_id: 1
                }
      ]);
    });
};
