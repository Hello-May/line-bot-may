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
          type: DataTypes.STRING,
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
      await queryInterface.createTable('monsters', {
        monsterId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        skin: {
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
          type: DataTypes.INTEGER,
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
        battleMoney: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        food: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        agi: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        vit: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        str: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        lucky: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        target: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        poison: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        boom: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        medicine: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        initialAutoIncrement: 1
      });
      await queryInterface.createTable('tasks', {
        taskId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        level: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        desc: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        initialAutoIncrement: 1
      });
      await queryInterface.createTable('habits', {
        habitId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        habit: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        secret: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        done: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        initialAutoIncrement: 1
      });
      await queryInterface.createTable('sayings', {
        sayingId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        sentence: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        initialAutoIncrement: 1
      });
      await queryInterface.createTable('skins', {
        skinId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        say: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      }, {
        initialAutoIncrement: 1
      });
      await queryInterface.createTable('battles', {
        battleId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        monsterId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        identity: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        hp: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        agi: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        vit: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        str: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        lucky: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        character: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        skin: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
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

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('users');
      await queryInterface.dropTable('monsters');
      await queryInterface.dropTable('tasks');
      await queryInterface.dropTable('habits');
      await queryInterface.dropTable('sayings');
      await queryInterface.dropTable('skins');
      await queryInterface.dropTable('battles');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};
