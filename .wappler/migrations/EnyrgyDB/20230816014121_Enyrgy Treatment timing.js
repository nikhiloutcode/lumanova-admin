
exports.up = function(knex) {
  return knex.schema
    .createTable('skinTypeScoreClient', async function (table) {
      table.increments('id');
      table.integer('clientId').unsigned();
      table.foreign('clientId').references('id').inTable('client').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('score');
      table.datetime('createdAt').defaultTo(knex.fn.now());
      table.datetime('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('fitzpatrickSkinType', async function (table) {
      table.increments('id');
      table.integer('lowScore');
      table.integer('highScore');
      table.string('skinType', 255);
      table.string('time', 255);
    })
    .table('client', async function (table) {
      table.integer('scoreGeneticDisposition');
      table.integer('scoreReactionSun');
      table.integer('scoreTanningHabits');
    })
    .table('treatments', async function (table) {
      table.boolean('redness');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('treatments', async function (table) {
      table.dropColumn('redness');
    })
    .table('client', async function (table) {
      table.dropColumn('scoreGeneticDisposition');
      table.dropColumn('scoreReactionSun');
      table.dropColumn('scoreTanningHabits');
    })
    .dropTable('fitzpatrickSkinType')
    .dropTable('skinTypeScoreClient')
};
