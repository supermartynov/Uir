const fetch = require("node-fetch") ;

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://Elena:@localhost:5422/jobs')

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
    salaryHistory: {
        type: Sequelize.STRING,
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
        allowNull: false
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
    salary: {
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
    }
}, {
    sequelize,
    modelName: 'vacancies'
})

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
    let Speciality_promise = await Specialties.sync();
    let Vacancy = await Vacancies.sync();
    //Specialties.hasMany(Vacancies)
    //Vacancies.belongsTo(Specialties)
    console.log("The table for the User model was just (re)created!");
}
