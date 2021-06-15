import {Sequelize, DataTypes, Model, sequelize} from '../db/models/imports.js'
import {Specialties} from '../db/models/specialties.js';
import {Vacancies} from '../db/models/vacancies.js'
import {Skills} from '../db/models/skills.js'
import {Responsibilities} from '../db/models/responsibilities.js'
import {RespSpecialty} from '../db/models/resp_specialty.js'
import {SkillSpecialty} from '../db/models/skill_specialty.js'

async function getSpecialtiesForMainPage(){
    return Specialties.findAll();
}

export {getSpecialtiesForMainPage};
