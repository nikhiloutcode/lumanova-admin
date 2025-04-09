
exports.up = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.dropColumn('address');
      table.string('streetNumber');
      table.string('streetName');
      table.string('city');
      table.string('state');
      table.string('zip');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.string('address', 255);
      table.dropColumn('streetNumber');
      table.dropColumn('streetName');
      table.dropColumn('city');
      table.dropColumn('state');
      table.dropColumn('zip');
    })
};
