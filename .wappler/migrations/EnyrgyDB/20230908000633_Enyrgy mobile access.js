
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.boolean('mobileView').defaultTo(true);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('mobileView');
    })
};
