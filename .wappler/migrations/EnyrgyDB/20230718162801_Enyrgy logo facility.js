
exports.up = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.text('logo').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.string('logo', 255).alter();
    })
};
