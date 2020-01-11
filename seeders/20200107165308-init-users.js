'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('groups', [
      {
        groupId: 'C53dba6bb007ff46457c28be90b10208c',
        status:false,
        token:'lMtEZ78tdowNziExOx3X5wLo5oPb5sr5vHVJuQF3lGJ',
        monsterId: 'null',
        // isBetaMember: false
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        groupId: 'Cf0ac6278bbdb900b3318dd70a3b92e9b',
        status:false,
        token:'null',
        monsterId: 'null',
        // isBetaMember: false
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
