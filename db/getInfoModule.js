const fetch = require("node-fetch") ;

function createUrl(specialty, country){
    const mainInfoUrl = 'https://api.adzuna.com/v1/api/jobs' +
        '/' + country + '/search/1?app_id=d8bb74a4&app_key=d3dfd2a0f3f8dae94fa84170169c57ad&what=' + specialty +
        '&category=it-jobs'
    const topCompaniesUrl = 'https://api.adzuna.com/v1/api/jobs/' + country + '/top_companies?' +
        'app_id=d8bb74a4&app_key=d3dfd2a0f3f8dae94fa84170169c57ad&what=' + specialty + '&category=it-jobs'
    let masUrl = [mainInfoUrl, topCompaniesUrl];
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

async function selectInfo(urlArr){

    let infoSpecialty = {
        name: '',
        country: '',
        overageSalary: '',
        topCompanies: [],
    }

    let vacancies = {}

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

    Requests(urlMain, urlCompanies)
        .then(response => {
            infoSpecialty.overageSalary = response.mainInfo.mean;
            for (let i = 0; i < 5; i++){
                infoSpecialty.topCompanies.push(response.topFiveCompanies.leaderboard[i].canonical_name);
            }
            let i = 0;
            for (let key of response.mainInfo.results){
                i ++
                currentVacancy.companyName = key.company.display_name
                currentVacancy.description = key.description.replace(/<[^>]+>/g,'')
                currentVacancy.salaryMax = key.salary_max
                currentVacancy.salaryMin = key.salary_min
                currentVacancy.url = key.redirect_url

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
            console.log(infoSpecialty)
            return {infoSpecialty, vacancies}
        })
        .catch((err) => console.log(err))
}

let urlArr = createUrl('JAVA', 'gb')
selectInfo(urlArr)

module.exports.createUrl = createUrl;
module.exports.Requests = Requests;
module.exports.selectInfo = selectInfo;
