
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.renameColumn('getUSer', 'getUser');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.renameColumn('getUser', 'getUSer');
    })
    .dropTable('device')
};
