
exports.up = function(knex) {
  return knex.schema
    .createTable('detailsSubscription', async function (table) {
      table.increments('id');
      table.integer('plansId').unsigned();
      table.foreign('plansId').references('id').inTable('plans').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('subscriptionId').unsigned();
      table.foreign('subscriptionId').references('id').inTable('subscriptions').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .table('detailsFacility', async function (table) {
      table.dropColumn('plansId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsFacility', async function (table) {
      table.integer('plansId');
    })
    .dropTable('detailsSubscription')
};
