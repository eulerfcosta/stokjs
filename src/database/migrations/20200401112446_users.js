
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('name', 200).notNullable();
        table.string('email', 200).notNullable();
        table.string('password', 200).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('users');

};
