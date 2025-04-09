
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.renameColumn('abdomenLowerBack', 'exposedArea');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.renameColumn('exposedArea', 'abdomenLowerBack');
    })
};
