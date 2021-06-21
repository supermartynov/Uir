import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
import {Skills} from "./skills.js";


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



export {Knowledge}