
exports.up = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.dropColumn('streetNumber');
      table.dropColumn('streetName');
      table.string('address1', 255);
      table.string('address2', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.string('streetNumber', 255);
      table.string('streetName', 255);
      table.dropColumn('address1');
      table.dropColumn('address2');
    })
};
