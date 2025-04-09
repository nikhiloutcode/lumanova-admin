
exports.up = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.integer('time').defaultTo(0).comment('number of seconds the treatment lasted');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropColumn('time');
    })
};
