
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.boolean('profile').defaultTo(false);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('profile');
    })
};
