
exports.up = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.string('status', 255).comment('active, canceled, completed').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.string('status', 255).comment('active, canceled, finished').alter();
    })
};
