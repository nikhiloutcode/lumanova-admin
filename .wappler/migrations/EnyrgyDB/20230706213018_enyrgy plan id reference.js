
exports.up = function(knex) {
  return knex.schema
    .table('detailsFacility', async function (table) {
      table.integer('plansId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsFacility', async function (table) {
      table.dropColumn('plansId');
    })
};
