
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

// title: A string
// body: A string
// createdAt: A date formatted as a string