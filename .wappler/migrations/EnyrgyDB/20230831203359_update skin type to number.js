
exports.up = function(knex) {
  return knex.schema
    .table('fitzpatrickSkinType', async function (table) {
      table.integer('skinType').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('fitzpatrickSkinType', async function (table) {
      table.string('skinType', 255).alter();
    })
};
