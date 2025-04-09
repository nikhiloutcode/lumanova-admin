
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.string('description', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('description');
    })
};
