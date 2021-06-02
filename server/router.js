import Router from 'express'
const router = new Router()

router.get('/', (req, resp) => {
        console.log('everythingOk')
        resp.send('lolkek')
    }
)
router.get('/specialty/:id')

export  {router};