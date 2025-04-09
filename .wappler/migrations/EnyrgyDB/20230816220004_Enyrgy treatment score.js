
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.integer('eyeColor').alter();
      table.integer('hairColor').alter();
      table.integer('skinColor').alter();
      table.dropColumn('sunburn');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.string('eyeColor', 255).alter();
      table.string('hairColor', 255).alter();
      table.string('skinColor', 255).alter();
      table.integer('sunburn');
    })
};
