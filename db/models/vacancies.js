const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')


class Vacancies extends Model {}
Vacancies.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    minSalary: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    maxSalary: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url : {
        type: Sequelize.TEXT
    }

    }, {
        sequelize,
    modelName: 'vacancies'
})

module.exports = Vacancies;