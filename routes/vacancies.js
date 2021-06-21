import Router from 'express-promise-router'
const routerVacancies = Router()

import { controller } from '../controllers/index.js'

//routerVacancies.route('/').get(controller.vacancies.getAll)
routerVacancies.route('/').get(controller.vacancies.getAllBySpecialtyId)

export {routerVacancies}
