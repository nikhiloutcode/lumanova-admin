
exports.up = function(knex) {
  return knex.schema
    .table('subscriptions', async function (table) {
      table.string('numberDuration');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('subscriptions', async function (table) {
      table.dropColumn('numberDuration');
    })
};
