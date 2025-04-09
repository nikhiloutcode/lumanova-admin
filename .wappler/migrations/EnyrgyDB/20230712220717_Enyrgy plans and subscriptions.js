
exports.up = function(knex) {
  return knex.schema
    .table('plans', async function (table) {
      table.dropColumn('frequency');
    })
    .table('subscriptions', async function (table) {
      table.dropColumn('frequency');
      table.dropColumn('limitSessions');
      table.text('description');
      table.string('duration', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('subscriptions', async function (table) {
      table.string('frequency', 255);
      table.integer('limitSessions');
      table.dropColumn('description');
      table.dropColumn('duration');
    })
    .table('plans', async function (table) {
      table.string('frequency', 255);
    })
};
