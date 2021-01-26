import * as  mongoose from 'mongoose';

export const JobSchema = new mongoose.Schema({
   title: String,
   salaire: Number
})
