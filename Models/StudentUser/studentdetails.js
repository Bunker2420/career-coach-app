import mongoose from "mongoose";
import Student from "./student.js"; 

const { Schema } = mongoose;

const detailsSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "student", 
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxLength: [100, "Maximum Length of the name is 100 characters"],
    },
    education: {
      degree: {
        type: String,
        enum: ["BTech", "MTech", "Degree"],
        required: true,
      },
      college: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
    goals: {
      type: String,
      required: true,
    },
    preferredDomain: [
      {
        type: String,
        enum: [
          "Web Development",
          "Data Science",
          "AI/ML",
          "Cybersecurity",
          "DevOps",
          "Mobile Dev",
          "Cloud Computing",
        ],
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// avoid model overwrite in dev
const detail =
  mongoose.models.detail || mongoose.model("detail", detailsSchema);

export default detail;
