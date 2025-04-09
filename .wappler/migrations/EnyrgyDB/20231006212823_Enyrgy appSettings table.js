
exports.up = function(knex) {
  return knex.schema
    .createTable('appSettings', async function (table) {
      table.increments('id');
      table.string('currentVersion', 255);
      table.string('minimalVersion', 255);
      table.text('notes');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('appSettings')
};
