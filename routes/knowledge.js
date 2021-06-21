import Router from 'express-promise-router'
const routerKnowledge= Router()

import { controller } from '../controllers/index.js'


routerKnowledge.route('/').get(controller.knowledge.getAll)
routerKnowledge.route('/:id').get(controller.knowledge.get)
routerKnowledge.route('/').put(controller.knowledge.create)

export {routerKnowledge}
