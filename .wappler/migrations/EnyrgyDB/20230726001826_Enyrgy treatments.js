
exports.up = function(knex) {
  return knex.schema
    .table('detailsClient', async function (table) {
      table.integer('treatmentsId');
    })
    .table('historyTreatmentClient', async function (table) {
      table.dropForeign('clientId');
      table.dropColumn('clientId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('historyTreatmentClient', async function (table) {
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('detailsClient', async function (table) {
      table.dropColumn('treatmentsId');
    })
};
