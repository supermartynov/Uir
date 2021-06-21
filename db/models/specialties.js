import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
import {Vacancies} from './vacancies.js'

class Specialties extends Model {}

Specialties.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    overageSalary: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    imgUrl: {
        type: Sequelize.TEXT,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'specialties',
    timestamps: false
})


Specialties.hasMany(Vacancies, {foreignKey: 'specialty_id', onUpdate: 'Cascade', onDelete: 'Cascade'});
export {Specialties};

