
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.timestamp('consentTreatment');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.dropColumn('consentTreatment');
    })
};
