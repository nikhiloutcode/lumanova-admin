
exports.up = function(knex) {
  return knex.schema
    .createTable('historyTreatmentClient', async function (table) {
      table.increments('id');
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('duration');
      table.time('lastTreatment');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('historyTreatmentClient')
};
