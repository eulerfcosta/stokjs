
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('condominiums').del()
        .then(function () {
            // Inserts seed entries
            return knex('condominiums').insert([
                {id: 1, name: 'condominio-01',
                    address: 'Rua abc',
                    number: '321',
                    complement: '',
                    neighborhood: ' Bairro 1',
                    zipcode: '60000001',
                    city: 'cidade 1',
                    state: 'CE',
                },
                {id: 2, name: 'condominio-02',
                    address: 'Rua 2',
                    number: '745',
                    complement: '',
                    neighborhood: 'Bairro 2',
                    zipcode: '60000002',
                    city: 'cidade 1',
                    state: 'CE',
                },
                {id: 3, name: 'condominio-03',
                    address: 'Rua A2N8',
                    number: '834',
                    complement: '',
                    neighborhood: 'Bairro 3',
                    zipcode: '60100100',
                    city: 'cidade 2',
                    state: 'CE',
                }
      ]);
    });
};
