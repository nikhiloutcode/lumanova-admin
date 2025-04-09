
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.boolean('facilityView').defaultTo(false);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('facilityView');
    })
};
