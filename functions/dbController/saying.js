const db = require('../../models');
const { sayings } = require("../../models");
const Saying = db.sayings;

const searchByRandom = async () => {
  let saying = await sayings.findAll();
  return saying[Math.round((Math.random() * (saying.length - 1)))];
}

module.exports = {
  searchByRandom
}