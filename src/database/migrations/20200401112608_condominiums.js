
exports.up = function(knex) {
    return kenex.schema.createTable('condominiums', function(table) {
        table.increments();
        table.string('name' , 200).notNullable();
        table.string('address' , 200).notNullable();
        table.string('number' , 10).nullable();
        table.string('complement' , 200).nullable();
        table.string('neighborhood' , 200).notNullable();
        table.string('zipcode' , 10).notNullable();
        table.string('city' , 200).notNullable();
        table.string('state' , 2).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return kenex.schema.dropTable('condominiums');
};
