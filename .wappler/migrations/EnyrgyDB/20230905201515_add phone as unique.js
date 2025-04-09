
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('phone', 255).unique().alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropUnique('phone');
      table.string('phone', 255).alter();
    })
};
