
exports.up = function(knex) {
    return kenex.schema.createTeable('clients_address' , function(table) {
        table.increments();
        table.boolean('is_condominium').notNullable().defaultTo(false);
        table.integer('condominium_id').unsigned().notNullable();
        table.integer('client_id').unsigned().notNullable();
        table.string('address' , 200).notNullable();
        table.string('number' , 10).nullable();
        table.string('complement' , 200).nullable();
        table.string('neighborhood' , 200).notNullable();
        table.string('zipcode' , 10).notNullable();
        table.string('city' , 200).notNullable();
        table.string('state' , 2).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('condominium_id').references('id').inTable('condominiums').onDelete(CASCADE);
        table.foreign('client_id').references('id').inTable('clients').onDelete(CASCADE);
    });
};

exports.down = function(knex) {
    return kenex.schema.dropTable('clients_address');
};
