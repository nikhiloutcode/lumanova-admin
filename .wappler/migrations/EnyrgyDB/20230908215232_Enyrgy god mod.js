
exports.up = function(knex) {
  return knex.schema
    .createTable('godMod', async function (table) {
      table.increments('id');
      table.integer('userId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('godMod')
};
