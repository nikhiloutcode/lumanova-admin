
exports.up = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.datetime('canceledAt').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.string('canceledAt', 255).alter();
    })
};
