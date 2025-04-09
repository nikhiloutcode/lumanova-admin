
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.string('gender', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.dropColumn('gender');
    })
};
