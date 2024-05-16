
const {Sequelize, sequelize} = require('../db');

const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING
    },
    email:{
     type: DataTypes.STRING
    }
  });

module.exports = {
    Song
};