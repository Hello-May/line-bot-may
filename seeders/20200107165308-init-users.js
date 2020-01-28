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
      },
      {
        sentence: '勇氣和堅定是美德的精神與靈魂。Courage and resolution are the spirit and soul of virtue.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '忍耐和專心會使我們度過難關。Patience and application will carry us through.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '健康的身體貴於黃金鑄成的皇冠。A good healthy body is worth more a crown in gold.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '千言萬語不如一個行動。A thousand words will not leave so deep an impression as one deed.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '任何值得做的，就把它做好。Whatever is worth doing is worth doing well.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '如果你竭盡全力，你就不用擔心失敗。If you are doing your best,you will not have to worry about failure.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '鏈條的堅固程度取決於它最薄弱的環節。A chain is no stronger than its weakest link.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '一次痛苦的經驗抵得上千百次的告誡。One thorn of experience is worth a whole wilderness of warning.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '當你停止嘗試的時候，你就完全失敗了。You make the failure complete when you stop trying.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '能處處尋求快樂的人才是最富有的人。That man is the richest whose pleasure are the cheapest.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '逆境能打敗弱者而造就強者。Adversity can beat the weak and the strong.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '怎樣思想，就有怎樣的生活。How to thought, there is what kind of life.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: '世上本沒有路，走的人多了便成了路。This no way in the world, more people became walk.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
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
      },
      {
        name: '炸蝦獸',
        image: 'https://i.postimg.cc/LsKmCMH2/1.png',
        say: '炸蝦～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '炸蝦獸',
        image: 'https://i.postimg.cc/x8CQJfPy/2.png',
        say: '炸蝦～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '炸蝦獸',
        image: 'https://i.postimg.cc/KjH2t6qX/3.png',
        say: '炸蝦～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '炸蝦獸',
        image: 'https://i.postimg.cc/1zGsbYt6/4.png',
        say: '炸蝦～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '炸蝦獸',
        image: 'https://i.postimg.cc/SsVqx2cx/5.png',
        say: '炸蝦～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '草莓獸',
        image: 'https://i.postimg.cc/kX976YKD/1.png',
        say: '草莓～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '草莓獸',
        image: 'https://i.postimg.cc/Z5smQTgy/2.png',
        say: '草莓～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '草莓獸',
        image: 'https://i.postimg.cc/fRRZ53HN/3.png',
        say: '草莓～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '草莓獸',
        image: 'https://i.postimg.cc/s2BzdkdH/4.png',
        say: '草莓～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '餅乾獸',
        image: 'https://i.postimg.cc/4dmQ11c9/1.png',
        say: '餅乾～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '餅乾獸',
        image: 'https://i.postimg.cc/7PJNGmwv/2.png',
        say: '餅乾～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '餅乾獸',
        image: 'https://i.postimg.cc/MTNb3j0r/3.png',
        say: '餅乾～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '餅乾獸',
        image: 'https://i.postimg.cc/PJDbgr2f/4.png',
        say: '餅乾～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '星月獸',
        image: 'https://i.postimg.cc/nL6C6K57/1.png',
        say: '星月～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '星月獸',
        image: 'https://i.postimg.cc/dVN79cj5/2.png',
        say: '星月～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '星月獸',
        image: 'https://i.postimg.cc/DzWSjpCn/3.png',
        say: '星月～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '星月獸',
        image: 'https://i.postimg.cc/RFKN965Y/4.png',
        say: '星月～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '銀河獸',
        image: 'https://i.postimg.cc/KjsXHfph/1.png',
        say: '銀河～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '銀河獸',
        image: 'https://i.postimg.cc/1RWZXRm7/2.png',
        say: '銀河～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '銀河獸',
        image: 'https://i.postimg.cc/CLzpqydh/3.png',
        say: '銀河～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '銀河獸',
        image: 'https://i.postimg.cc/wTZ85Wsh/4.png',
        say: '銀河～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '蛋蛋獸',
        image: 'https://i.postimg.cc/bNwGKvrz/1.png',
        say: '蛋蛋～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '蛋蛋獸',
        image: 'https://i.postimg.cc/ncSsZt9q/2.png',
        say: '蛋蛋～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '蛋蛋獸',
        image: 'https://i.postimg.cc/d0rD8kH9/3.png',
        say: '蛋蛋～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '蛋蛋獸',
        image: 'https://i.postimg.cc/3xykxb2V/4.png',
        say: '蛋蛋～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '蛋蛋獸',
        image: 'https://i.postimg.cc/t4LYZt5T/5.png',
        say: '蛋蛋～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '浪濤獸',
        image: 'https://i.postimg.cc/g2dGfSN3/1.png',
        say: '浪濤～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '浪濤獸',
        image: 'https://i.postimg.cc/13HyPGj2/2.png',
        say: '浪濤～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '浪濤獸',
        image: 'https://i.postimg.cc/d0Vw07M1/3.png',
        say: '浪濤～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '浪濤獸',
        image: 'https://i.postimg.cc/432ZHJZ1/4.png',
        say: '浪濤～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '浪濤獸',
        image: 'https://i.postimg.cc/QtBDpRdZ/5.png',
        say: '浪濤～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '哈味獸',
        image: 'https://i.postimg.cc/02jY7npd/1.png',
        say: '哈密瓜～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '哈味獸',
        image: 'https://i.postimg.cc/9XJP4KqQ/2.png',
        say: '哈密瓜～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '哈味獸',
        image: 'https://i.postimg.cc/TYsr0b08/3.png',
        say: '哈密瓜～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '摩卡獸',
        image: 'https://i.postimg.cc/YCfC0KhX/1.png',
        say: '摩卡～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '摩卡獸',
        image: 'https://i.postimg.cc/zfzXRthq/2.png',
        say: '摩卡～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '摩卡獸',
        image: 'https://i.postimg.cc/yNL6hmhc/3.png',
        say: '摩卡～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '摩卡獸',
        image: 'https://i.postimg.cc/bJMzWqBv/4.png',
        say: '摩卡～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '摩卡獸',
        image: 'https://i.postimg.cc/pTyWsmk7/5.png',
        say: '摩卡～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '可可獸',
        image: 'https://i.postimg.cc/cJw200CH/1.png',
        say: '可可～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '可可獸',
        image: 'https://i.postimg.cc/brNBxnTD/2.png',
        say: '可可～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '可可獸',
        image: 'https://i.postimg.cc/rmTbp3R9/3.png',
        say: '可可～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '可可獸',
        image: 'https://i.postimg.cc/hj0YQs9R/4.png',
        say: '可可～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '芒果獸',
        image: 'https://i.postimg.cc/C5qvYVw7/1.png',
        say: '芒果～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '芒果獸',
        image: 'https://i.postimg.cc/y6MQjWTb/2.png',
        say: '芒果～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '芒果獸',
        image: 'https://i.postimg.cc/5N8PR17N/3.png',
        say: '芒果～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '芒果獸',
        image: 'https://i.postimg.cc/662bCCCZ/4.png',
        say: '芒果～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '太陽獸',
        image: 'https://i.postimg.cc/L82MyxVw/1.png',
        say: '太陽～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '太陽獸',
        image: 'https://i.postimg.cc/vZhwC5qB/2.png',
        say: '太陽～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '太陽獸',
        image: 'https://i.postimg.cc/6QQxKTgh/3.png',
        say: '太陽～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '太陽獸',
        image: 'https://i.postimg.cc/g0BF2mPb/4.png',
        say: '太陽～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '塔派獸',
        image: 'https://i.postimg.cc/43RHFk0Z/1.png',
        say: '塔派～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '塔派獸',
        image: 'https://i.postimg.cc/3wj4sfMG/2.png',
        say: '塔派～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '塔派獸',
        image: 'https://i.postimg.cc/d14717Vt/3.png',
        say: '塔派～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '塔派獸',
        image: 'https://i.postimg.cc/1t9ns0Pj/4.png',
        say: '塔派～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '神秘獸',
        image: 'https://i.postimg.cc/XJGJVsmx/1.png',
        say: '神秘～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '神秘獸',
        image: 'https://i.postimg.cc/FRMK1jQv/2.png',
        say: '神秘～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '神秘獸',
        image: 'https://i.postimg.cc/PJ15DPtw/3.png',
        say: '神秘～',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '神秘獸',
        image: 'https://i.postimg.cc/DfGZHYqw/4.png',
        say: '神秘～',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
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
