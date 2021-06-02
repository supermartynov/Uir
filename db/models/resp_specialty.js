import {Sequelize, DataTypes, Model, sequelize} from './imports.js'
import {Specialties} from './specialties.js'
import {Responsibilities} from './Responsibilities.js'


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

export {RespSpecialty};