import {request} from "./generic.cervice.js";
import {Skills} from "../../models/skills.js";
import {softSkills, hardSkills} from "./info.js";
import {findSpecialtyByName, findSkillByName} from "./finders.js";
import {Specialties} from "../../models/specialties.js";
import {SkillSpecialty} from "../../models/skill_specialty.js";

const getSpecialty = (id) => request({ url: `specialties/${id}`, method: "get"});

const getSpecialtyNames = () => request({url: 'specialties/names', method: "get"})

const getSpecialties = () => request({ url: `specialties`, method: "get"});

const insertIntoSkills = (body) => request({url: `skills`, method: "put", data: body})

const insertIntoKnowledge = (body) => request({url: `knowledge`, method: "put", data: body})

const skillSpecialties = (body) => request({url: `skillSpecialty`, method: "put", data: body})


async function insertSkillsArr(soft, hard) {
  await Skills.sync({force: true});
  for (let i = 0; i < soft.length; i++){
    await Skills.create(soft[i])
  }
  for (let i = 0; i < hard.length; i++){
    await  Skills.create(hard[i])
  }
}

async function insertSkillSpecialties(specialty, skill) {
  await SkillSpecialty.create({
    skill_id: await findSkillByName(skill),
    specialty_id: await findSpecialtyByName(specialty)
  })
}


async function insertIntoSpecialties(){
  const specialties = ['PHP developer', 'Java developer', 'Python developer', 'Go developer', 'C++ developer']
  const skills = ['Готовность выполнять рутинную работу', "Исполнительность", "Знание SQl"]
  for (const specialty of specialties) {
    for (const skill of skills) {
      await insertSkillSpecialties(specialty, skill)
    }
  }


}

await insertSkillsArr(softSkills, hardSkills)
await SkillSpecialty.sync({force: true})
await insertIntoSpecialties()


export {
  getSpecialties, getSpecialty, getSpecialtyNames
}
