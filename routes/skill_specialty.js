import Router from 'express-promise-router'
const routerSkillSpecialty= Router()

import { controller } from '../controllers/index.js'


routerSkillSpecialty.route('/').get(controller.skillSpecialty.getAllBySpecialtyId)
routerSkillSpecialty.route('/list/').get(controller.skillSpecialty.getAll)
routerSkillSpecialty.route('/:id').get(controller.skillSpecialty.get)
routerSkillSpecialty.route('/').put(controller.skillSpecialty.create)

export {routerSkillSpecialty}
