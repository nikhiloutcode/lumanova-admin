
exports.up = function(knex) {
  return knex.schema
    .table('subscriptions', async function (table) {
      table.integer('numberDuration').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('subscriptions', async function (table) {
      table.string('numberDuration', 255).alter();
    })
};
