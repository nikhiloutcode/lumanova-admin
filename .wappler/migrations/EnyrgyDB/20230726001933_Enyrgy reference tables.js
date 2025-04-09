
exports.up = function(knex) {
  return knex.schema
    .table('detailsClient', async function (table) {
      table.integer('treatmentsId').alter().unsigned();
      table.foreign('treatmentsId').references('id').inTable('treatments').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsClient', async function (table) {
      await table.dropForeign('treatmentsId');
      table.integer('treatmentsId').alter();
    })
};
