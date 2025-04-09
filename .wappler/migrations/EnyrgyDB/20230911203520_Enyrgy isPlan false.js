
exports.up = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.boolean('isPlan').defaultTo(false).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.boolean('isPlan').defaultTo().alter();
    })
};
