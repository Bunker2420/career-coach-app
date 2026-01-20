import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "student",
    },
    hasCompletedProfile: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

studentSchema.plugin(passportLocalMongoose);

const student = mongoose.models.student || mongoose.model("student", studentSchema);

export default student;
