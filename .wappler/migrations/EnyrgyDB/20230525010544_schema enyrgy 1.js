
exports.up = function(knex) {
  return knex.schema
    .table('detailsFacility', async function (table) {
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('detailsUser', async function (table) {
      table.dropForeign('facilityId');
      table.dropColumn('facilityId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsUser', async function (table) {
      table.integer('facilityId').unsigned();
      table.foreign('facilityId').references('id').inTable('facility').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('detailsFacility', async function (table) {
      table.dropForeign('userId');
      table.dropColumn('userId');
    })
    .dropTable('device')
};
