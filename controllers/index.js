import {specialtyController} from './specialtyContoller.js'
import {vacanciesController} from './vacanciesController.js'
import {skillController} from "./skillController.js";
import {knowledgeController} from "./knowledge.js";
import {skillSpecialtyController} from "./skillSpecialtyController.js";


export const controller = {
    specialties: specialtyController,
    vacancies: vacanciesController,
    skills: skillController,
    knowledge: knowledgeController,
    skillSpecialty: skillSpecialtyController
}