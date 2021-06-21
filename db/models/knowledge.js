import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
import {SkillSpecialty} from "./skill_specialty.js";


class Knowledge extends Model {}

Knowledge.init({
    knowledge_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    knowledge_level: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'knowledge',
    timestamps: false
}
)

//Knowledge.hasMany(SkillSpecialty, {foreignKey: 'knowledge_id', onUpdate: 'Cascade', onDelete: 'Cascade'});


export {Knowledge}