
exports.up = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.renameColumn('ownerFirstName', 'salesFirstName');
      table.renameColumn('ownerLastName', 'salesLastName');
      table.renameColumn('ownerEmail', 'salesEmail');
      table.renameColumn('ownerPhone', 'salesPhone');
      table.dropColumn('distributor');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('facility', async function (table) {
      table.renameColumn('salesFirstName', 'ownerFirstName');
      table.renameColumn('salesLastName', 'ownerLastName');
      table.renameColumn('salesEmail', 'ownerEmail');
      table.renameColumn('salesPhone', 'ownerPhone');
      table.string('distributor', 255);
    })
};
