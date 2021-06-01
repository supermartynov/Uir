const fetch = require("node-fetch");
const getInfo = require('./getInfoModule')
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')
const Specialties = require('./models/specialties')
const Vacancies = require('./models/vacancies')
const Responsibilities = require('./models/responsibilities')
const resp_specialty = require('./models/resp_specialty')



let specialty = ["Java developer", "C++ developer"]
async function fillDataBase(specialtiesArr, country){
    for (let i = 0; i < specialtiesArr.length; i++){
        let currentSpecialtyInfo = {};
        let currentVacancies = {};
        await getInfo.selectInfo(specialtiesArr[i], country)
            .then(async (res) => {
                currentSpecialtyInfo = res.infoSpecialty
                currentVacancies = res.vacancies
                const specialty = await Specialties.create({
                    name: currentSpecialtyInfo.name,
                    overageSalary: (currentSpecialtyInfo.overageSalary === '') ? 0: currentSpecialtyInfo.overageSalary,
                    country: country
                })
                for (let j = 1; j < 6; j++){
                    const vacancies = await Vacancies.create({
                        minSalary: (!!currentVacancies[String(j)].salaryMin) ? currentVacancies[String(j)].salaryMin : 0,
                        maxSalary: currentVacancies[String(j)].salaryMax ? currentVacancies[String(j)].salaryMax : 0,
                        companyName: currentVacancies[String(j)].companyName,
                        description: currentVacancies[String(j)].description,
                        specialtyId: i + 1,
                        url: currentVacancies[String(j)].url,
                        location: currentVacancies[String(j)].location.join(", ")
                    })
                }
            })
    }
}


async function checkConnection(){
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}


async function createAgain() {
    await Specialties.sync({force: true});
    await Vacancies.sync({force: true});
    await Responsibilities.sync({force: true})
    await resp_specialty.sync({force: true})

}

createAgain()
//fillDataBase(specialty, 'gb')