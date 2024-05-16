
const { STRING } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

const Comment = sequelize.define('Comment', {
    body: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.STRING
    },
  });

module.exports = {
    Comment
};