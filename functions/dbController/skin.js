const db = require('../../models');
const { skins } = require("../../models");
const Skin = db.skins;

const searchByNameAndRandom = async (name) => {
  let skin = await skins.findAll({ where: { name: name } });
  return skin[Math.round((Math.random() * (skin.length - 1)))];
}

module.exports = {
  searchByNameAndRandom
}