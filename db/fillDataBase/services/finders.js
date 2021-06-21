import {Skills} from "../../models/skills.js";
import {Specialties} from "../../models/specialties.js";

async function findSkillByName(skill) {
    const currentSkill = await Skills.findAll({
        attributes: ['id'],
        where: {
            skill_name: skill
        }
    })
    return currentSkill[ '0' ].dataValues.id
}
async function findSpecialtyByName(specialty) {
    const currentSpecialty = await Specialties.findAll({
        attributes: ['id'],
        where: {
            name: specialty
        }
    })
    return currentSpecialty[ '0' ].dataValues.id
}

export {findSkillByName, findSpecialtyByName}