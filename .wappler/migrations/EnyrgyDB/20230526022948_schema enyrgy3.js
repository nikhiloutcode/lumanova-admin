
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.boolean('sendEmail').defaultTo(false);
      table.boolean('sendSMS').defaultTo(false);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('sendEmail');
      table.dropColumn('sendSMS');
    })
    .dropTable('device')
};
