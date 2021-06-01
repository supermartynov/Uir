const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')
class Responsibilities extends Model {}

Responsibilities.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autIncrement: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'responsibilities'
})

module.exports = Responsibilities;