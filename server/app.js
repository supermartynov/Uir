import express from 'express';
const app = express();
//import {getSpecialtiesForMainPage} from "./getInfoFromDB.js";
import bodyparser from 'body-parser'
import cors from 'cors'
import {routerSpecialties} from '../routes/specialties.js'
import {routerVacancies} from '../routes/vacancies.js'

app.use(bodyparser.json())
app.use(express.json())
app.use(cors())
app.use('/specialties', routerSpecialties)
app.use('/vacancies', routerVacancies)

async function startApp() {
    app.listen(5005, () => {
        console.log('server has been statred on port 5005...')
    })
}

app.get('/', function (req, res) {
    res.send({messege: 'hello world!'})
});

startApp()



//lsof -i tcp:3000
// $ kill -9 PID