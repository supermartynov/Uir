import Router from 'express-promise-router'
const routerSpecialties = Router()

import { controller } from '../controllers/index.js'

routerSpecialties.route('/').get(controller.specialties.getAll)
routerSpecialties.route('/:id').get(controller.specialties.get)
routerSpecialties.route('/vacancies/:id').get(controller.vacancies.getAllVacancies)


export {routerSpecialties}
