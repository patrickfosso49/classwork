import mongoose from "mongoose";
import { StudentInterface } from "./StudentInterface";

export interface IStudent {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

const schema = mongoose.Schema;

    const StudentSchema = new schema({
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      }
    });

export type Student = StudentInterface & mongoose.Document;

export const student = mongoose.model<Student>("student", StudentSchema);