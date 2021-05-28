const fetch = require("node-fetch") ;

let infoSpecialty = {
    name: '',
    country: '',
    overageSalary: '',
    topCompanies: [],
}

let vacancies = {}

function createUrl(specialty, country){
    infoSpecialty.name = specialty;
    infoSpecialty.country = country;
    specialty = specialty.replace(/ /g, '%20');
    const mainInfoUrl = 'https://api.adzuna.com/v1/api/jobs' +
        '/' + country + '/search/1?app_id=196c1ee0&app_key=a423eadba5ff26ac4704d9b304c85bad&what=' + specialty +
        '&category=it-jobs'
    const topCompaniesUrl = 'https://api.adzuna.com/v1/api/jobs/' + country + '/top_companies?' +
        'app_id=196c1ee0&app_key=a423eadba5ff26ac4704d9b304c85bad&what=' + specialty + '&category=it-jobs'
    let masUrl = [mainInfoUrl, topCompaniesUrl];
    console.log(masUrl)
    return masUrl
}

async function Requests(urlMain, urlCompanies) {
    const mainResponse = await fetch(urlMain)
        .then(response => {
            return response.json()
        })
    const topCompanies = await fetch(urlCompanies)
        .then(response => {
            return response.json()
        })
    let response = {
        mainInfo: mainResponse,
        topFiveCompanies: topCompanies
    }
    return response
}

async function prepairInfo(urlArr){

    let currentVacancy = {
        companyName: '',
        description: '',
        location: [],
        salaryMin: '',
        salaryMax: '',
        url: ''
    }

    let urlMain = urlArr[0];
    let urlCompanies = urlArr[1];

    await Requests(urlMain, urlCompanies)
        .then(response => {
            infoSpecialty.overageSalary = response.mainInfo.mean;
            for (let i = 0; i < 5; i++){
                infoSpecialty.topCompanies.push(response.topFiveCompanies.leaderboard[i].canonical_name);
            }
            let i = 0;
            for (let key of response.mainInfo.results){
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
