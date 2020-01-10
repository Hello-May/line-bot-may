const DataTypes = require('sequelize/lib/data-types');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('users', {
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mosterId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        initialAutoIncrement: 1
      });
      await queryInterface.createTable('groups', {
        groupId: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mosterId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        initialAutoIncrement: 1
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  */

  down: (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('users');
      await queryInterface.dropTable('groups');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.dropTable('users');
  */
};
