
exports.up = function(knex) {
  return knex.schema
    .table('device', async function (table) {
      table.string('contactName', 255);
      table.string('contactPhone', 255);
      table.string('contactEmail', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('device', async function (table) {
      table.dropColumn('contactName');
      table.dropColumn('contactPhone');
      table.dropColumn('contactEmail');
    })
};
