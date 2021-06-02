const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')
const Specialties = require('./specialties')
const Responsibilities = require('./responsibilities')

class RespSpecialty extends Model {}


RespSpecialty.init({
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
    modelName: 'resp_specialty',
    timestamps: false
})

Responsibilities.belongsToMany(Specialties, {through: 'resp_specialty', foreignKey: 'id', otherKey: 'id' });
Specialties.belongsToMany(Responsibilities, {through: 'resp_specialty', foreignKey: 'id', otherKey: 'id' });

module.exports = RespSpecialty