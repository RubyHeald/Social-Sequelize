
const {Sequelize, sequelize} = require('../db');

const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.STRING
    }
  });

module.exports = {
    Song
};