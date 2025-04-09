
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('isAdmin');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.boolean('isAdmin').notNullable().defaultTo(false);
    })
};
