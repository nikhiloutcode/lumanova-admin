
exports.up = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.string('salesFirstName', 255);
      table.string('salesLastName', 255);
      table.string('salesEmail', 255);
      table.string('salesPhone', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.dropColumn('salesFirstName');
      table.dropColumn('salesLastName');
      table.dropColumn('salesEmail');
      table.dropColumn('salesPhone');
    })
};
