
exports.up = function(knex) {
  return knex.schema
    .dropTable('detailsTreatments')
    .createTable('detailsPayment', async function (table) {
      table.increments('id');
      table.string('status', 255);
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('subscriptionStripeId');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .table('client', async function (table) {
      table.integer('treatments').defaultTo(0);
      table.text('customerId');
    })
    .table('treatments', async function (table) {
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropForeign('clientId');
      table.dropColumn('clientId');
    })
    .table('client', async function (table) {
      table.dropColumn('treatments');
      table.dropColumn('customerId');
    })
    .dropTable('detailsPayment')
    .createTable('detailsTreatments', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.integer('treatmentsId').unsigned();
      table.foreign('treatmentsId').references('id').inTable('treatments').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('subscriptionsId').unsigned();
      table.foreign('subscriptionsId').references('id').inTable('subscriptions').onUpdate('CASCADE').onDelete('CASCADE');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
};
