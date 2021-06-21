import Router from 'express-promise-router'
const routerSkillSpecialty= Router()

import { controller } from '../controllers/index.js'


routerSkillSpecialty.route('/').get(controller.skillSpecialty.getAll)
routerSkillSpecialty.route('/:id').get(controller.skillSpecialty.get)
routerSkillSpecialty.route('/').post(controller.skillSpecialty.create)

export {routerSkillSpecialty}