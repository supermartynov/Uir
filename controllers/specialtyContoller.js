import {genericCrud} from './genericController.js';
import {Specialties} from '../db/models/specialties.js';

const specialtyController = {
    ...genericCrud(Specialties)
}
export {specialtyController}
