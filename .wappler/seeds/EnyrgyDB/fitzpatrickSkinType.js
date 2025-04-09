exports.seed = async function (knex) {
  // Inserts seed entries
  await knex.transaction(async trx => {

    // Process fitzpatrickSkinType
    return knex('fitzpatrickSkinType').del()
      .then(function () {
        // Inserts seed entries
        return knex('fitzpatrickSkinType').insert([
          { lowScore: 0, highScore: 7, skinType: 1 },
          { lowScore: 8, highScore: 16, skinType: 2 },
          { lowScore: 17, highScore: 25, skinType: 3 },
          { lowScore: 25, highScore: 30, skinType: 4 },
          { lowScore: 30, highScore: 35, skinType: 5 },
          { lowScore: 35, highScore: 40, skinType: 6 }
        ]);
      });

  })

};