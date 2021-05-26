const fetch = require("node-fetch") ;
const getInfo = require('./getInfoModule')

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')

let specialty = ["Java developer"]

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
                    topCompanies: currentSpecialtyInfo.topCompanies.join(", "),
                    country: country
                })
                for (let j = 1; j < 6; j++){
                    const vacancies = await Vacancies.create({
                        minSalary: (!!currentVacancies[String(j)].salaryMin) ? currentVacancies[String(j)].salaryMin : 0,
                        maxSalary: currentVacancies[String(j)].salaryMax ? currentVacancies[String(j)].salaryMax : 0,
                        companyName: currentVacancies[String(j)].companyName,
                        description: currentVacancies[String(j)].description,
                        specialtiesId: i + 1,
                        url: currentVacancies[String(j)].url,
                        location: currentVacancies[String(j)].location.join(", ")
                    })
                }
            })
    }
}

class Specialties extends Model {}
class Vacancies extends Model {}
class Example extends Model {}

Example.init({
    id: {type: Sequelize.INTEGER, primaryKey: true}
},{
    sequelize,
    modelName: 'example'
})


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
        allowNull: false
    },
    topCompanies: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    }

},{
    sequelize,
    modelName: 'specialties'
})


Vacancies.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    minSalary: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    maxSalary: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialtiesId: Sequelize.INTEGER,
    url : {
        type: Sequelize.TEXT
    }

}, {
    sequelize,
    modelName: 'vacancies'
})

//alter table vacancies add column specialtiesId Integer;
// alter table vacancies add foreign key (specialtiesId) references specialties(id);


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
    let Speciality_promise = await Specialties.sync({force: true});
    let Vacancy = await Vacancies.sync({force: true});
    Specialties.hasMany(Vacancies, {foreignKey: 'specialtyId'})
    Vacancies.belongsTo(Specialties)
    console.log("The table for the User model was just (re)created!");
}
//createAgain()
fillDataBase(specialty, 'ru')