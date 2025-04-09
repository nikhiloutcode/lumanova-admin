
exports.up = function(knex) {
  return knex.schema
    .createTable('detailsFitzpatrickSkinType', async function (table) {
      table.increments('id');
      table.integer('fitzpatrickSkinTypeId').unsigned();
      table.foreign('fitzpatrickSkinTypeId').references('id').inTable('fitzpatrickSkinType').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('treatment');
      table.integer('time');
    })
    .table('fitzpatrickSkinType', async function (table) {
      table.dropColumn('time');
    })
    .table('treatments', async function (table) {
      table.integer('detailsFitzpatrickSkinTypeId').unsigned();
      table.foreign('detailsFitzpatrickSkinTypeId').references('id').inTable('detailsFitzpatrickSkinType').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropForeign('detailsFitzpatrickSkinTypeId');
      table.dropColumn('detailsFitzpatrickSkinTypeId');
    })
    .table('fitzpatrickSkinType', async function (table) {
      table.string('time', 255);
    })
    .dropTable('detailsFitzpatrickSkinType')
};
