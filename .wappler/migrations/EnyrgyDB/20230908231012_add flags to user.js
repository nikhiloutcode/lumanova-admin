
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.boolean('isTester').defaultTo(false);
      table.boolean('isAdmin').notNullable().defaultTo(false);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('isTester');
      table.dropColumn('isAdmin');
    })
};
