
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('clients_address').del()
        .then(function () {
            // Inserts seed entries
            return knex('clients_address').insert([
                {id: 1, is_condominium: true ,
                    condominium_id: 3, client_id: 1,
                },
                {id: 2, is_condominium: false ,
                    client_id: 2,
                    address: 'Rua 5Q3RF2',
                    number: '32',
                    complement: '',
                    neighborhood: ' Bairro 1',
                    zipcode: '60000001',
                    city: 'cidade 1',
                    state: 'CE',
                },
                {id: 3, is_condominium: true ,
                    condominium_id: 2, client_id: 3,
                },
                {id: 4, is_condominium: true ,
                    condominium_id: 1, client_id: 4,
                },
                {id: 5, is_condominium: false ,
                    client_id: 5,
                    address: 'Rua 5Q3RF2',
                    number: '28',
                    complement: '',
                    neighborhood: ' Bairro 1',
                    zipcode: '60000001',
                    city: 'cidade 1',
                    state: 'CE',
                },
                {id: 6, is_condominium: true ,
                    condominium_id: 3 , client_id: 6,
                },
                {id: 7, is_condominium: true ,
                    condominium_id: 2 , client_id: 7
                },
                {id: 8, is_condominium: false ,
                    client_id: 8 ,
                    address: 'Rua 5Q3RF2',
                    number: '11',
                    complement: '',
                    neighborhood: ' Bairro 1',
                    zipcode: '60000001',
                    city: 'cidade 1',
                    state: 'CE',
                },
                {id: 9, is_condominium: true ,
                    condominium_id: 1 , client_id: 9 ,
                },
      ]);
    });
};
