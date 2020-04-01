
exports.up = function(knex) {
    return knex.schema.createTable('clients_address' , function(table) {
        table.increments();
        table.boolean('is_condominium').notNullable().defaultTo(false);
        table.integer('condominium_id').unsigned().nullable();
        table.integer('client_id').unsigned().notNullable();
        table.string('address' , 200).nullable();
        table.string('number' , 10).nullable();
        table.string('complement' , 200).nullable();
        table.string('neighborhood' , 200).nullable();
        table.string('zipcode' , 10).nullable();
        table.string('city' , 200).nullable();
        table.string('state' , 2).nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('condominium_id').references('id').inTable('condominiums').onDelete('CASCADE');
        table.foreign('client_id').references('id').inTable('clients').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients_address');
};
