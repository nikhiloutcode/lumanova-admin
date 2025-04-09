
exports.up = function(knex) {
  return knex.schema
    .table('plans', async function (table) {
      table.boolean('active').defaultTo(true);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('plans', async function (table) {
      table.dropColumn('active');
    })
};
