const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const User = require('./User');

const EmailCode = sequelize.define('emailCode', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }
    //userId
});

EmailCode.belongsTo(User);
User.hasMany(EmailCode);

module.exports = EmailCode;