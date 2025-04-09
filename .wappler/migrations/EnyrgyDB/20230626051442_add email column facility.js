
exports.up = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.string('email', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.dropColumn('email');
    })
};
