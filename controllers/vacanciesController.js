import {genericCrud} from './genericController.js';
import {Vacancies} from '../db/models/vacancies.js';

const vacanciesController = {
    ...genericCrud(Vacancies),

};



export {vacanciesController};