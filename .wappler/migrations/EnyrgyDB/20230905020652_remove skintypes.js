
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.dropColumn('scoreSkinType');
    })
    .table('user', async function (table) {
      table.dropColumn('skintype');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.integer('skintype');
    })
    .table('client', async function (table) {
      table.integer('scoreSkinType');
    })
};
