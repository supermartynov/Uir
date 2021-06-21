import * as getInfo from "./getInfoModule.js"
import {Sequelize, DataTypes, Model, sequelize} from './models/imports.js'
import {Specialties} from './models/specialties.js';
import {Vacancies} from './models/vacancies.js'
import {Skills} from './models/skills.js'
import {Responsibilities} from './models/responsibilities.js'
import {RespSpecialty} from './models/resp_specialty.js'
import {SkillSpecialty} from './models/skill_specialty.js'
import {Knowledge} from "./models/knowledge.js";

async function insertSkills(obj) {
    await Skills.create({
        skill_name: obj.skill_name,
        type: obj.type
    })
}

async function insertKnowledge() {
    await Knowledge.create({
        knowledge_level: obj.knowledge_level
    })
}

async function insdertSkillSpecialty(obj) {
    await SkillSpecialty.create({
        skill_id: obj.skill_id,
        specialty_id: obj.specialty_id,
        knowledge_id: obj.knowledge_id
    })
}


async function insertExample(responsDescriptionArr, specialtyId) {
    await Skills.create({
        skill_name: 'Умение вдохновлять',
        type : '0'
    })
    await Skills.create({
        skill_name: 'Знание C++',
        type : '1'
    })
    await SkillSpecialty.create({
        skill_id: 1,
        specialty_id: 1
    })
    await SkillSpecialty.create({
        skill_id: 2,
        specialty_id: 1
    })
    for (let i = 0; i < responsDescriptionArr.length; i++) {
        await Responsibilities.create({
            description: responsDescriptionArr[i]
        })
        await RespSpecialty.create({
            responsibility_id: i + 1,
            specialty_id: specialtyId
        })
    }
}