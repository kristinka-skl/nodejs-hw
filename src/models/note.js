import { model, Schema } from 'mongoose';
const noteSchema = new Schema({
title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false,
      default: '',
    },
    tag: {
      type: String,
      required: false,
      enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
      default: 'todo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const Note = model('Note', noteSchema);


