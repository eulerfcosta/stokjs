
exports.up = function(knex) {
    return kenex.schema.createTeable('stoks' , function(table) {
        table.increments();
        table.integer('item_id').unsigned().notNullable();
        table.integer('stok_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.boolean('is_active').notNullable().defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('item_id').references('id').inTable('items').onDelete(CASCADE);
        table.foreign('stok_id').references('id').inTable('stoks').onDelete(CASCADE);
        table.foreign('user_id').references('id').inTable('users').onDelete(CASCADE);
    });
};

exports.down = function(knex) {
    return kenex.schema.dropTable('stoks');
};
