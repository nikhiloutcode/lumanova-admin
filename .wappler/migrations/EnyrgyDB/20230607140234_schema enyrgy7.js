
exports.up = function(knex) {
  return knex.schema
    .table('subscriptions', async function (table) {
      table.renameColumn('frecuency', 'frequency');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('subscriptions', async function (table) {
      table.renameColumn('frequency', 'frecuency');
    })
};
