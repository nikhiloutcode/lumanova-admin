
exports.up = function(knex) {
  return knex.schema
    .table('detailsClient', async function (table) {
      table.string('status', 255);
      table.datetime('expirationAt');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsClient', async function (table) {
      table.dropColumn('status');
      table.dropColumn('expirationAt');
    })
};
