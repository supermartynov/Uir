import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
import {Specialties} from './Specialties.js'
import {Skills} from './skills.js'
import {Knowledge} from "./knowledge.js";

class SkillSpecialty extends Model {}


SkillSpecialty.init({
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
}
    /*skill_id: {
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
    }*/,
}, {
    sequelize,
    modelName: 'skill_specialty',
    timestamps: false
})

Specialties.belongsToMany(Skills,
    {through: 'skill_specialty',
            foreignKey: 'id',
            otherKey: 'id'
    })
Skills.belongsToMany(Specialties,
    {through: 'skill_specialty',
            foreignKey: 'id',
            otherKey: 'id'
    })
Skills.


export {SkillSpecialty};