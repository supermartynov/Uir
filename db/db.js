const fetch = require("node-fetch");
const getInfo = require('./getInfoModule')
const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')
const Specialties = require('./models/specialties')
const Vacancies = require('./models/vacancies')
const Skills = require('./models/skills')
const Responsibilities = require('./models/responsibilities')
const RespSpecialty = require('./models/resp_specialty')
const SkillSpecialty = require('./models/skill_specialty')


let specialty = ["Java developer", "C++ developer"]

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
                        console.log(currentVacancies[String(j)].salaryMin)
                        await Vacancies.create({
                        min_salary: (!!currentVacancies[String(j)].salaryMin) ? currentVacancies[String(j)].salaryMin : 0,
                        max_salary: currentVacancies[String(j)].salaryMax ? currentVacancies[String(j)].salaryMax : 0,
                        company_name: currentVacancies[String(j)].companyName,
                        description: currentVacancies[String(j)].description,
                        specialtyId: i + 1,
                        url: currentVacancies[String(j)].url,
                        location: currentVacancies[String(j)].location.join(", ")
                    })
                }
            })
    }
}

async function insertExample(responsDescriptionArr, specialtyId) {
    for (let i = 0; i < responsDescriptionArr.length; i++) {
        await Responsibilities.create({
            description: responsDescriptionArr[i]
        })
        Responsibilities.findAll({

        })
        await RespSpecialty.create({
            responsibility_id: i + 1,
            specialty_id: specialtyId
        })

    }
}

async function createAgain() {
    await Specialties.sync({force: true});
    await Vacancies.sync({force: true});
    await Responsibilities.sync({force: true})
    await Skills.sync({force: true})
    await RespSpecialty.sync({force: true})
    await SkillSpecialty.sync({force: true})
}

responsArrCplus = ['Создание драйверов устройств', 'Создание приложений', 'Создание игр']
responsArrJava = ['Разработка архитектуры и программных модулей десктопных, веб- и мобильных приложений'
    , 'Создание приложений', 'Техническая поддержка приложений на всех этапах их использования']

async function fillDB() {
    await createAgain()
    await fillDataBase(specialty, 'gb')
    await insertExample(responsArrCplus, 1)
    await insertExample(responsArrJava, 2)
}


//fillDataBase(specialty, 'gb')
fillDB()