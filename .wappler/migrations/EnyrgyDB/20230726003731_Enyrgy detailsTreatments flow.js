
exports.up = function(knex) {
  return knex.schema
    .createTable('detailsTreatments', async function (table) {
      table.increments('id');
      table.integer('treatmentsId').unsigned();
      table.foreign('treatmentsId').references('id').inTable('treatments').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('subscriptionsId').unsigned();
      table.foreign('subscriptionsId').references('id').inTable('subscriptions').onUpdate('CASCADE').onDelete('CASCADE');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .table('detailsClient', async function (table) {
      table.dropForeign('treatmentsId');
      table.dropColumn('treatmentsId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsClient', async function (table) {
      table.integer('treatmentsId').unsigned();
      table.foreign('treatmentsId').references('id').inTable('treatments').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .dropTable('detailsTreatments')
};
