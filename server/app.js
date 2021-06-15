import express from 'express';
const app = express();
import {router} from './router.js';
import {getSpecialtiesForMainPage} from "./getInfoFromDB.js";
import bodyparser from 'body-parser'
import cors from 'cors'

app.use(bodyparser.json())
app.use(express.json())
app.use(cors())
app.use('/api', router)

async function startApp() {
    app.listen(5005, () => {
        console.log('server has been statred on port 5005...')
    })
}

app.get('/', function (req, res) {
    getSpecialtiesForMainPage()
        .then(data => {
            res.send(data['1']['dataValues']['name']);
        })
});

startApp()