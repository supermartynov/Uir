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
    company_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    min_salary: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    max_salary: {
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
    modelName: 'vacancies',
    timestamps: false
})

module.exports = Vacancies;