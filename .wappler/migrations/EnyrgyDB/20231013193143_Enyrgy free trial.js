
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.boolean('hasFreeTrial').defaultTo(true);
    })
    .table('detailsPayment', async function (table) {
      table.timestamp('freeTrialEndAt');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsPayment', async function (table) {
      table.dropColumn('freeTrialEndAt');
    })
    .table('client', async function (table) {
      table.dropColumn('hasFreeTrial');
    })
};
