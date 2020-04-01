
exports.up = function(knex) {
    return knex.schema.createTable('stoks' , function(table) {
        table.increments();
        table.string('name' , 10).nullable();
        table.integer('stok_type_id').unsigned().notNullable();
        table.integer('client_id').unsigned().nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('stok_type_id').references('id').inTable('stoks_type').onDelete('CASCADE');
        table.foreign('client_id').references('id').inTable('clients').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('stoks');
};
