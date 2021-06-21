import * as getInfo from "./getInfoModule.js"
import {Sequelize, DataTypes, Model, sequelize} from './models/imports.js'
import {Specialties} from './models/specialties.js';
import {Vacancies} from './models/vacancies.js'
import {Skills} from './models/skills.js'
import {Responsibilities} from './models/responsibilities.js'
import {RespSpecialty} from './models/resp_specialty.js'
import {SkillSpecialty} from './models/skill_specialty.js'
import {Knowledge} from "./models/knowledge.js";


let specialty = ["Java developer", "C++ developer", "Go developer", "PHP developer", "Python developer"]

async function fillDataBase(specialtiesArr, country) {
    for (let i = 0; i < specialtiesArr.length; i++) {
        let currentSpecialtyInfo = {};
        let currentVacancies = {};
        await getInfo.selectInfo(specialtiesArr[i], country)
            .then(async (res) => {
                currentSpecialtyInfo = res.infoSpecialty
                currentVacancies = res.vacancies
                    await Specialties.create({
                    name: currentSpecialtyInfo.name,
                    overageSalary: (currentSpecialtyInfo.overageSalary === '') ? 0 : currentSpecialtyInfo.overageSalary,
                    country: country
                })
                for (let j = 1; j < 6; j++) {
                        await Vacancies.create({
                        min_salary: (!!currentVacancies[String(j)].salaryMin) ? currentVacancies[String(j)].salaryMin : 0,
                        max_salary: currentVacancies[String(j)].salaryMax ? currentVacancies[String(j)].salaryMax : 0,
                        company_name: currentVacancies[String(j)].companyName,
                        description: currentVacancies[String(j)].description,
                        specialty_id: i + 1,
                        url: currentVacancies[String(j)].url,
                        location: currentVacancies[String(j)].location.join(", ")
                    })
                }
            })
    }
}


async function createAgain() {
    await Knowledge.sync({force: true})
    await Specialties.sync({force: true});
    await Vacancies.sync({force: true});
    await Responsibilities.sync({force: true})
    await Skills.sync({force: true})
    await RespSpecialty.sync({force: true})
    await SkillSpecialty.sync({force: true})


} //;


async function fillDB() {
    await createAgain()
    await fillDataBase(specialty, 'gb')
}


//fillDataBase(specialty, 'gb')
fillDB()