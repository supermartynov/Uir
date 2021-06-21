import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
import {Specialties} from './Specialties.js'
import {Skills} from './skills.js'
import {Knowledge} from "./knowledge.js";

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
    },
    knowledge_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Knowledge,
            key: 'knowledge_id'
        },
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'skill_specialty',
    timestamps: false
})

//Skills.belongsToMany(Specialties, {through: 'skill_specialty', foreignKey: 'id', otherKey: 'id' });
//Specialties.belongsToMany(Skills, {through: 'skill_specialty', foreignKey: 'id', otherKey: 'id' });
Skills.hasMany(SkillSpecialty, {foreignKey: 'skill_id', onUpdate: 'Cascade', onDelete: 'Cascade'})
Specialties.hasMany(SkillSpecialty, {foreignKey: 'specialty_id', onUpdate: 'Cascade', onDelete: 'Cascade'})
Knowledge.hasMany(SkillSpecialty, {foreignKey: 'knowledge_id', onUpdate: 'Cascade', onDelete: 'Cascade'});




export {SkillSpecialty};