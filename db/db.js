require('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD,
    {
        dialect: 'sqlite',
        storage: 'database.sqlite'
    });

module.exports = sequelize
