const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')
const Vacancies = require('./vacancies')

class Skills extends Model {}

Skills.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    skill_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'skills',
    timestamps: false
})

module.exports = Skills