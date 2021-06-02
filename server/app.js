const express = require('express')
const app = express();
const path = require('path');
const router = require('./router');

app.use(express.json())
app.use('/api', router)

async function startApp() {
    app.use(express.static(path.resolve(__dirname, 'client')));
    app.listen(3000, () => {
        console.log('server has been statred on port 3000...')
    });
}

app.get('/', function (req, res) {

});
app.post('/', (req, resp) =>{

})

startApp()