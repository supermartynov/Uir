const express = require('express')
const app = express()
const path = require('path')



app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', function (req, res){
    res.send('hello world')
    console.log('hello')
});


/*app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})*/

app.listen(3000, () => {console.log('server has been statred on port 3000...')});