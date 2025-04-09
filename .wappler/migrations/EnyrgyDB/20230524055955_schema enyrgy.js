
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('id');
      table.string('firstName', 255);
      table.string('lastName', 255);
      table.string('email', 255);
      table.string('verificationCode', 255);
      table.datetime('verificationCodeExpire');
      table.boolean('disabled').defaultTo(false);
      table.string('phone', 255);
      table.integer('userIdInvited');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('roles', async function (table) {
      table.increments('id');
      table.string('name', 255);
      table.boolean('createUser').defaultTo(false);
      table.boolean('updateUser').defaultTo(false);
      table.boolean('deleteUser').defaultTo(false);
      table.boolean('getUSer').defaultTo(false);
      table.boolean('createSubscription').defaultTo(false);
      table.boolean('updateSubscription').defaultTo(false);
      table.boolean('deleteSubscription').defaultTo(false);
      table.boolean('getSubscription').defaultTo(false);
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('sessions', async function (table) {
      table.increments('id');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('signUpDate').defaultTo(knex.fn.now());
      table.datetime('lastSignIn').defaultTo(knex.fn.now());
      table.integer('count');
      table.string('duration', 255);
    })
    .createTable('facility', async function (table) {
      table.increments('id');
      table.string('logo', 255);
      table.string('address', 255);
      table.string('phone', 255);
      table.string('ownerFirstName', 255);
      table.string('ownerLastName', 255);
      table.string('ownerEmail', 255);
      table.string('ownerPhone', 255);
      table.string('distributor', 255);
      table.boolean('disabled').defaultTo(false);
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('detailsUser', async function (table) {
      table.increments('id');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('facilityId').unsigned();
      table.foreign('facilityId').references('id').inTable('facility').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('rolesId').unsigned();
      table.foreign('rolesId').references('id').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('device', async function (table) {
      table.increments('id');
      table.string('serial', 255);
      table.integer('facilityId').unsigned();
      table.foreign('facilityId').references('id').inTable('facility').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('subscriptions', async function (table) {
      table.increments('id');
      table.string('name', 255);
      table.string('amount', 255);
      table.string('frecuency', 255);
      table.integer('limitSessions');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('detailsFacility', async function (table) {
      table.increments('id');
      table.integer('facilityId').unsigned();
      table.foreign('facilityId').references('id').inTable('facility').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('subscriptionId').unsigned();
      table.foreign('subscriptionId').references('id').inTable('subscriptions').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('client', async function (table) {
      table.increments('id');
      table.string('height', 255);
      table.string('weight', 255);
      table.string('sickDays', 255);
      table.string('eyeColor', 255);
      table.string('hairColor', 255);
      table.string('skinColor', 255);
    })
    .createTable('detailsClient', async function (table) {
      table.increments('id');
      table.integer('facilityId').unsigned();
      table.foreign('facilityId').references('id').inTable('facility').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('subscriptionId').unsigned();
      table.foreign('subscriptionId').references('id').inTable('subscriptions').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('detailsClient')
    .dropTable('client')
    .dropTable('detailsFacility')
    .dropTable('subscriptions')
    .dropTable('device')
    .dropTable('detailsUser')
    .dropTable('facility')
    .dropTable('sessions')
    .dropTable('roles')
    .dropTable('user')
};
