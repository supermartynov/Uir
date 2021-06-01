const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')
const Vacancies = require('./vacancies')

class Specialties extends Model {}
Specialties.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    overageSalary: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    softSkills: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    hardSkills: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    keyRespons: {
        type: Sequelize.TEXT,
        allowNull: true
    }

},{
    sequelize,
    modelName: 'specialties'
})

Specialties.hasMany(Vacancies, {foreignKey: 'specialtyId', onUpdate: 'Cascade', onDelete: 'Cascade'})
module.exports = Specialties;
