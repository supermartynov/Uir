const Router = require('express')

const router = new Router()

router.get('/api', (req, resp) => {
        console.log('everythingOk')
    }
)
router.get('/specialty/:id')
