import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
import {Vacancies} from './vacancies.js'

class Skills extends Model {}

Skills.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    skill_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'skills',
    timestamps: false
})

export {Skills};
