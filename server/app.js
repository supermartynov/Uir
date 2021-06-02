import express from 'express';
const app = express();

import {router} from './router.js';

app.use(express.json())
app.use('/api', router)

async function startApp() {
    app.listen(5000, () => {
        console.log('server has been statred on port 5000...')
    });
}

app.get('/', function (req, res) {
    res.status(200)
    res.send('lolksxddek')
});

startApp()