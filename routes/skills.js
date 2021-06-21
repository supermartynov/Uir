import Router from 'express-promise-router'
const routerSkills = Router()

import { controller } from '../controllers/index.js'


routerSkills.route('/').get(controller.skills.getAll)
routerSkills.route('/:id').get(controller.skills.get)
routerSkills.route('/').put(controller.skills.create)

export {routerSkills}
