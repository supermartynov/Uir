const fetch = require("node-fetch") ;

let infoSpecialty = {
    name: '',
    country: '',
    overageSalary: ''
}

let vacancies = {}

function createUrl(specialty, country){
    infoSpecialty.name = specialty;
    infoSpecialty.country = country;
    specialty = specialty.replace(/ /g, '%20');
    const mainInfoUrl = 'https://api.adzuna.com/v1/api/jobs' +
        '/' + country + '/search/1?app_id=196c1ee0&app_key=a423eadba5ff26ac4704d9b304c85bad&what=' + specialty +
        '&category=it-jobs'
    return mainInfoUrl
}

async function Requests(urlMain) {
    const mainResponse = await fetch(urlMain)
        .then(response => {
            return response.json()
        })
    return mainResponse
}

async function prepairInfo(Url){

    let currentVacancy = {
        companyName: '',
        description: '',
        location: [],
        salaryMin: '',
        salaryMax: '',
        url: ''
    }

    let urlMain = Url;

    await Requests(urlMain)
        .then(response => {
            infoSpecialty.overageSalary = response.mean;
            let i = 0;
            for (let key of response.results){
                i ++
                currentVacancy.companyName = key.company.display_name;
                currentVacancy.description = key.description.replace(/<[^>]+>/g,'');
                currentVacancy.salaryMax = key.salary_max
                currentVacancy.salaryMin = key.salary_min;
                currentVacancy.url = key.redirect_url;

                for (let area of key.location.area){
                    currentVacancy.location.push(area)
                }
                let clone = {}
                for (let key in currentVacancy) {
                    clone[key] = currentVacancy[key];
                }

                vacancies[i] = clone
                currentVacancy.location = []
            }
        })
        .catch((err) => console.log(err))
    return {infoSpecialty, vacancies}
}

async function selectInfo(specialty, country){
    let urlArr = createUrl(specialty, country)
    let response = await prepairInfo(urlArr)
    return response
}

function getObjectParametrs(obj){
    for (let key in obj){
        console.log(key)
    }
}


module.exports.selectInfo = selectInfo;
module.exports.getObjectParametrs = getObjectParametrs;
