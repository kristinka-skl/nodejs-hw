import { Joi, Segments } from "celebrate";
import { TAGS } from "../constants/tags.js";
import { isValidObjectId } from 'mongoose';

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(20).default(10),
    tag: Joi.string().trim().valid(...Object.values(TAGS)),
    search: Joi.string().trim().default(''),
  }),
};
const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};
export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().trim().custom(objectIdValidator).required(),
  })
};
export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().trim().min(1).required(),
    content: Joi.string().trim().default(''),
    tag: Joi.string().trim().valid(...Object.values(TAGS)),
  })
};
export const updateNoteSchema = {
  ...noteIdSchema,
  [Segments.BODY]: Joi.object({
    title: Joi.string().trim().min(1),
    content: Joi.string().trim().default(''),
    tag: Joi.string().trim().valid(...Object.values(TAGS)),
  }).min(1),
};
