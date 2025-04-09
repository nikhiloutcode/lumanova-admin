
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('createUser');
      table.dropColumn('updateUser');
      table.boolean('users').defaultTo(false);
      table.boolean('packages').defaultTo(false);
      table.boolean('devices').defaultTo(false);
      table.boolean('clients').defaultTo(false);
      table.dropColumn('deleteUser');
      table.dropColumn('getUser');
      table.dropColumn('createSubscription');
      table.dropColumn('updateSubscription');
      table.dropColumn('deleteSubscription');
      table.dropColumn('getSubscription');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.boolean('createUser').defaultTo(false);
      table.boolean('updateUser').defaultTo(false);
      table.dropColumn('users');
      table.dropColumn('packages');
      table.dropColumn('devices');
      table.dropColumn('clients');
      table.boolean('deleteUser').defaultTo(false);
      table.boolean('getUser').defaultTo(false);
      table.boolean('createSubscription').defaultTo(false);
      table.boolean('updateSubscription').defaultTo(false);
      table.boolean('deleteSubscription').defaultTo(false);
      table.boolean('getSubscription').defaultTo(false);
    })
};
