import express from 'express';
const app = express();
import bodyparser from 'body-parser'
import cors from 'cors'
import {router} from '../routes/index.js'

app.use(bodyparser.json())
app.use(express.json())
app.use(cors())
app.use('/specialties', router.routerSpecialties)
app.use('/vacancies', router.routerVacancies)

async function startApp() {
    app.listen(5005, () => {
        console.log('server has been statred on port 5005...')
    })
}

app.get('/', function (req, res) {
    res.send({messege: 'Welcome!'})
});

startApp()
vdjovfdjk


//lsof -i tcp:3000
// $ kill -9 PID