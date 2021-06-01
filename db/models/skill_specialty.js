const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')
const Specialties = require('./specialties')
const Skills = require('./skills')

class RespSpecialty extends Model {}


SkillSpecialty.init({
    skill_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: Skills,
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
    modelName: 'skill_specialty'
})

Skills.belongsToMany(Specialties, {through: 'skill_specialty', foreignKey: 'id', otherKey: 'id' });
Specialties.belongsToMany(Responsibilities, {through: 'skill_specialty', foreignKey: 'id', otherKey: 'id' });

module.exports = RespSpecialty