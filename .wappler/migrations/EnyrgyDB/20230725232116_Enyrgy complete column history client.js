
exports.up = function(knex) {
  return knex.schema
    .table('historyTreatmentClient', async function (table) {
      table.boolean('complete').defaultTo(false);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('historyTreatmentClient', async function (table) {
      table.dropColumn('complete');
    })
};
