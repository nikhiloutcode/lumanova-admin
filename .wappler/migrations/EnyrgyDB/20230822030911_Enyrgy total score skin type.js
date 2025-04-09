
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.integer('scoreSkinType');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.dropColumn('scoreSkinType');
    })
};
