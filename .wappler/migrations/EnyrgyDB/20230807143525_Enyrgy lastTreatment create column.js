
exports.up = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.datetime('lastTreatment');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropColumn('lastTreatment');
    })
};
