
exports.up = function(knex) {
  return knex.schema
    .table('plans', async function (table) {
      table.text('idStripe');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('plans', async function (table) {
      table.dropColumn('idStripe');
    })
};
