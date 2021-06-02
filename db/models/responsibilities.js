import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
class Responsibilities extends Model {}

Responsibilities.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'responsibilities',
    timestamps: false
})

export {Responsibilities};
