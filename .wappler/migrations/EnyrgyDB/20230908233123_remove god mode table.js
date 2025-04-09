
exports.up = function(knex) {
  return knex.schema
    .dropTable('godMod')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('godMod', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.integer('userId');
    })
};
