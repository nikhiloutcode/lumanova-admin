
exports.up = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.string('canceledAt', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.dropColumn('canceledAt');
    })
};
