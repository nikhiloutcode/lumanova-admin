
exports.up = function(knex) {
  return knex.schema
    .table('plans', async function (table) {
      table.renameColumn('idStripe', 'productId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('plans', async function (table) {
      table.renameColumn('productId', 'idStripe');
    })
};
