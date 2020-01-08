'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: '1',
      // isBetaMember: false
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      id: '2',
      // isBetaMember: false
        createdAt: new Date(),
        updatedAt: new Date()
    },{
      id: '3',
      // isBetaMember: false
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
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
