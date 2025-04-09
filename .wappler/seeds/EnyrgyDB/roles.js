exports.seed = async function (knex) {
  // Inserts seed entries
  await knex.transaction(async trx => {

    // Process roles
    return knex('roles').del()
      .then(function () {
        // Inserts seed entries
        return knex('roles').insert([
          { name: 'adminEnyrgy', sendEmail: true, sendSMS: false, users: true, packages: true, devices: true, clients: true, adminView: true, createdAt: new Date(), updatedAt: new Date(), description: 'Admin', facilities: true, profile: false },
          { name: 'shipperEnyrgy', sendEmail: true, sendSMS: false, users: false, packages: false, devices: true, clients: false, adminView: true, createdAt: new Date(), updatedAt: new Date(), description: 'Shipper', facilities: false, profile: false },
          { name: 'ownerFacility', sendEmail: true, sendSMS: true, users: true, packages: true, devices: true, clients: true, adminView: true, createdAt: new Date(), updatedAt: new Date(), description: 'Owner', facilities: false, profile: true },
          { name: 'adminFacility', sendEmail: true, sendSMS: true, users: true, packages: true, devices: true, clients: true, adminView: true, createdAt: new Date(), updatedAt: new Date(), description: 'Administrator', facilities: false, profile: true },
          { name: 'facilitatorFacility', sendEmail: true, sendSMS: true, users: false, packages: true, devices: false, clients: true, adminView: true, createdAt: new Date(), updatedAt: new Date(), description: 'Facilitator', facilities: false, profile: false },
          { name: 'clients', sendEmail: false, sendSMS: false, users: false, packages: false, devices: false, clients: false, adminView: false, createdAt: new Date(), updatedAt: new Date(), description: 'Client', facilities: false, profile: true }
        ]);
      });

  })

};