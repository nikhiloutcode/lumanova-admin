
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.integer('skintype');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('skintype');
    })
};
