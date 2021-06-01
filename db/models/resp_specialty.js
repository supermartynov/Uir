const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')
const Specialties = require('./specialties')
const Responsibilities = require('./responsibilities')

class resp_specialty extends Model {}


resp_specialty.init({
    responsibility_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: Responsibilities,
            key: 'id'
        }
    },
    specialty_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: Specialties,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'resp_specialty'
})

Responsibilities.belongsToMany(Specialties, {through: 'resp_specialty', foreignKey: 'id', otherKey: 'id' });
Specialties.belongsToMany(Responsibilities, {through: 'resp_specialty', foreignKey: 'id', otherKey: 'id' });

module.exports = resp_specialty