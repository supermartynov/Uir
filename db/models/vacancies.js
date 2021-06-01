const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')


Vacancies.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false  //fdvddfg
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

/!*specialtiesId: {
type: Sequelize.INTEGER
}*!/
url : {
    type: Sequelize.TEXT
}

}, {
    sequelize,
        modelName: 'vacancies'
})