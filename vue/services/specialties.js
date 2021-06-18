import qs from 'qs';
import {request} from './generic.service.js'

const getSpecialty = (id) => request({ url: `specialties/${id}`, method: "get"});

const getSpecialties = () => request({ url: `specialties`, method: "get"});


export {
  getSpecialties, getSpecialty
}
