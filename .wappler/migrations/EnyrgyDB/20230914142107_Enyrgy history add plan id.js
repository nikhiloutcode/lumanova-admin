
exports.up = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.integer('planId').unsigned();
      table.foreign('planId').references('id').inTable('plans').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.dropForeign('planId');
      table.dropColumn('planId');
    })
};
