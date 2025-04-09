
exports.up = function(knex) {
  return knex.schema
    .renameTable('historyTreatmentClient', 'treatments')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('treatments', 'historyTreatmentClient')
};
