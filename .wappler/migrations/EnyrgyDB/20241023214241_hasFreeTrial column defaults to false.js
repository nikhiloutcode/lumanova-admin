
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.boolean('hasFreeTrial').defaultTo(false).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.boolean('hasFreeTrial').defaultTo(true).alter();
    })
};
