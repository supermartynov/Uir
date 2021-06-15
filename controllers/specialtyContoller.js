import {genericCrud} from './generricController.js';
import {Specialties} from '../db/models/specialties.js';

const specialtyController = {
    ...genericCrud(Specialties)
}
export {specialtyController}
