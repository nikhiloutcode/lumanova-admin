
exports.up = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.integer('paymentId').unsigned();
      table.foreign('paymentId').references('id').inTable('detailsPayment').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropForeign('paymentId');
      table.dropColumn('paymentId');
    })
};
