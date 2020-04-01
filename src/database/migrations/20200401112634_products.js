
exports.up = function(knex) {
    return kenex.schema.createTeable('products' , function(table) {
        table.increments();
        table.string('name' , 200).unique().notNullable();
        table.integer('products_type_id').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('products_type_id').references('id').inTable('products_type').onDelete(CASCADE);
    });
};

exports.down = function(knex) {
    return kenex.schema.dropTable('products');
};
