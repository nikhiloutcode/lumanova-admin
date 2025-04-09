
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.boolean('isGodMode').notNullable().defaultTo(false);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('isGodMode');
    })
};
