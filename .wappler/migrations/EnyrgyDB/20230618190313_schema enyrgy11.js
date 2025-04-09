
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.boolean('adminView').defaultTo(false);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('adminView');
    })
};
