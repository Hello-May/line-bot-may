'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: DataTypes.String,
        autoIncrement: true,
        primaryKey: true,
      },
      // name: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
