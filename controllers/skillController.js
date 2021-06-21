import {genericCrud} from './genericController.js';
import {Skills} from '../db/models/skills.js';

const skillController = {
    ...genericCrud(Skills)
}
export {skillController}
