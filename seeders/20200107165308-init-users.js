'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('groups', [
    //   {
    //     groupId: 'C53dba6bb007ff46457c28be90b10208c',
    //     status: false,
    //     token: 'lMtEZ78tdowNziExOx3X5wLo5oPb5sr5vHVJuQF3lGJ',
    //     monsterId: 'null',
    //     // isBetaMember: false
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     groupId: 'Cf0ac6278bbdb900b3318dd70a3b92e9b',
    //     status: false,
    //     token: 'null',
    //     monsterId: 'null',
    //     // isBetaMember: false
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ]);
    try {
      await queryInterface.bulkInsert('sayings', [{
        sentence: '覺得為時已晚的時候，恰恰是最早的時候。Thought is already is late, exactly is the earliest time.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '適當的準備能解決生活中87%的問題。Proper preparation solves 87 percent of life’s problems.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '拖延就是時間的小偷。Procrastination is the thief of time.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '浪費時間就是掠奪自己。Wasting time is robbing oneself.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '要做到不可替代，就要與眾不同。In order to be irreplaceable one must always be different.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '唯堅韌者始能遂其志。He that can have patience, can have what he will.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '腦中有知識，勝過手中有金錢。Wisdom in the mind is better than money in the hand.',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
      await queryInterface.bulkInsert('skins', [{
        name: '喵仔獸',
        image: 'https://i.postimg.cc/d0k3NGNh/1.jpg',
        say: '噢嗚～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '喵仔獸',
        image: 'https://i.postimg.cc/bv7J7d43/2.jpg',
        say: '呼嚕～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '喵仔獸',
        image: 'https://i.postimg.cc/nzqzppJZ/3.jpg',
        say: '姆啾～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '喵仔獸',
        image: 'https://i.postimg.cc/hvgGG6Dm/4.jpg',
        say: '好吃～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '喵仔獸',
        image: 'https://i.postimg.cc/FFgR6rpV/5.jpg',
        say: '喵喵～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '喵仔獸',
        image: 'https://i.postimg.cc/4NfdkDFk/6.jpg',
        say: '抱抱～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '喵仔獸',
        image: 'https://i.postimg.cc/prZL5Cr6/7.jpg',
        say: '累累～',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
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

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('sayings');
      await queryInterface.bulkDelete('skins');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};
