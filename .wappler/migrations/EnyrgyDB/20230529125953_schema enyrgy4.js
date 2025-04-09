
exports.up = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.string('birth', 255);
      table.integer('freckles');
      table.integer('sunTooLong');
      table.integer('degreeTurnBrown');
      table.integer('brownSeveralHours');
      table.integer('facialReactionSun');
      table.integer('tanning');
      table.integer('abdomenLowerBack');
      table.integer('sunburn');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('client', async function (table) {
      table.dropColumn('birth');
      table.dropColumn('freckles');
      table.dropColumn('sunTooLong');
      table.dropColumn('degreeTurnBrown');
      table.dropColumn('brownSeveralHours');
      table.dropColumn('facialReactionSun');
      table.dropColumn('tanning');
      table.dropColumn('abdomenLowerBack');
      table.dropColumn('sunburn');
    })
    .dropTable('device')
};
