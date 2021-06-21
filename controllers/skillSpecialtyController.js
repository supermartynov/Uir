import {genericCrud} from './genericController.js';
import {SkillSpecialty} from "../db/models/skill_specialty.js";

const skillSpecialtyController = {
    ...genericCrud(SkillSpecialty)
}
export {skillSpecialtyController}
