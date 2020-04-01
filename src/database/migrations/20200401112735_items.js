
exports.up = function(knex) {
    return knex.schema.createTable('items' , function(table) {
        table.increments();
        table.integer('product_id').unsigned().notNullable();
        table.integer('stok_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.string('sn' , 200).unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('product_id').references('id').inTable('clients').onDelete('CASCADE');
        table.foreign('stok_id').references('id').inTable('clients').onDelete('CASCADE');
        table.foreign('user_id').references('id').inTable('clients').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('items');
};
