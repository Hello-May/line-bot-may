'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        userId: 'U56556',
        status:false,
        // isBetaMember: false
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 'U51651',
        status:false,
        // isBetaMember: false
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 'U51551',
        status:false,
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
