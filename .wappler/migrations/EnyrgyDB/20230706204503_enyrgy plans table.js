
exports.up = function(knex) {
  return knex.schema
    .createTable('plans', async function (table) {
      table.increments('id');
      table.string('name');
      table.string('amount');
      table.string('frequency');
      table.string('limitSessions');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('plans')
};
