
exports.up = function(knex) {
  return knex.schema
    .dropTable('skinTypeScoreClient')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('skinTypeScoreClient', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('score');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
};
