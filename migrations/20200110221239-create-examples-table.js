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
        monsterId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        initialAutoIncrement: 1
      });
      // await queryInterface.createTable('groups', {
      //   groupId: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      //     primaryKey: true
      //   },
      //   status: {
      //     type: DataTypes.BOOLEAN,
      //     allowNull: false,
      //   },
      //   token: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      //   },
      //   monsterId: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //   },
      //   createdAt: DataTypes.DATE,
      //   updatedAt: DataTypes.DATE,
      // }, {
      //   initialAutoIncrement: 1
      // });
      await queryInterface.createTable('monsters', {
        monsterId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement:true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        born: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        level: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        exp: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        character: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        money: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        food: {
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

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('users');
      await queryInterface.dropTable('monsters');
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
