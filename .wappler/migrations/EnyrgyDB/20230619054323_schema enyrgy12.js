
exports.up = function(knex) {
  return knex.schema
    .createTable('detailsUsersFacility', async function (table) {
      table.increments('id');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('facilityId').unsigned();
      table.foreign('facilityId').references('id').inTable('facility').onUpdate('CASCADE').onDelete('CASCADE');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('detailsUsersFacility')
};
