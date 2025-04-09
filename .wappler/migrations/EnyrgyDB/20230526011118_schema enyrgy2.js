
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('detailsClient', async function (table) {
      table.dropForeign('userId');
      table.dropColumn('userId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsClient', async function (table) {
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('client', async function (table) {
      table.dropForeign('userId');
      table.dropColumn('userId');
    })
    .dropTable('device')
};
