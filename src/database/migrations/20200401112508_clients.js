
exports.up = function(knex) {
    return knex.schema.createTable('clients' , function(table) {
        table.increments();
        table.string('name' , 200).notNullable();
        table.string('doc', 25).unique().notNullable();
        table.boolean('is_stok').notNullable().defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients');
};
