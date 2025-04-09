
exports.up = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropForeign('detailsFitzpatrickSkinTypeId');
      table.dropColumn('detailsFitzpatrickSkinTypeId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.integer('detailsFitzpatrickSkinTypeId').unsigned();
      table.foreign('detailsFitzpatrickSkinTypeId').references('id').inTable('detailsFitzpatrickSkinType').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
