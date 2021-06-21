import Router from 'express-promise-router'
const routerSkills = Router()

import { controller } from '../controllers/index.js'


routerSkills.route('/').get(controller.skills.getAll)
routerSkills.route('/:id').get(controller.skills.get)
routerSkills.route('/').post(controller.skills.create)

export {routerSkills}
