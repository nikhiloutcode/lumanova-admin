
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('countryCode');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('countryCode');
    })
};
