import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
import {Specialties} from './Specialties.js'
import {Skills} from './skills.js'


class SkillSpecialty extends Model {}


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
    modelName: 'skill_specialty',
    timestamps: false
})

Skills.belongsToMany(Specialties, {through: 'skill_specialty', foreignKey: 'id', otherKey: 'id' });
Specialties.belongsToMany(Skills, {through: 'skill_specialty', foreignKey: 'id', otherKey: 'id' });

export {SkillSpecialty};