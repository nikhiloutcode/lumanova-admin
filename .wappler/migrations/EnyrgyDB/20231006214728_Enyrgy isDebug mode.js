
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.boolean('isDebug').defaultTo(false);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('isDebug');
    })
};
