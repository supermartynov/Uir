import {genericCrud} from './genericController.js';
import {Knowledge} from "../db/models/knowledge.js";

const knowledgeController = {
    ...genericCrud(Knowledge)
}
export {knowledgeController}
