
exports.up = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.integer('skinType');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropColumn('skinType');
    })
};
