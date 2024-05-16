
const { STRING } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

const Profile = sequelize.define('Profile', {
    bio: {
      type: DataTypes.STRING
    },
    profilePicture: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    }
  });

module.exports = {
    Profile
};