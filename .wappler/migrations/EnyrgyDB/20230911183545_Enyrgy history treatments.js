
exports.up = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.integer('facilityId').unsigned();
      table.foreign('facilityId').references('id').inTable('facility').onUpdate('CASCADE').onDelete('CASCADE');
      table.boolean('isPlan');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropForeign('facilityId');
      table.dropColumn('facilityId');
      table.dropColumn('isPlan');
    })
};
