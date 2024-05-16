const { STRING } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

const Like = sequelize.define('Like', {
    reactionType: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.STRING
    },
  });

module.exports = {
    Like
};