import mongoose from "mongoose";

const { Schema } = mongoose;

// 1) Subschema for a single career stage
const careerStageSchema = new Schema(
  {
    title: {
      type: String, // e.g. "Junior Frontend Developer"
      required: true,
    },
    bulletPoints: {
      type: [String], // e.g. ["Assist in ...", "Work closely ..."]
      default: [],
    },
  },
  { _id: false } // optional; prevents separate _id for each stage
);

const faqSchema = new Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
});

// 2) Main subject schema
const SubjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    detailedDescription: {
      type: String,
      required: true,
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    responsibilities: [
      {
        type: String,
        required: true,
      },
    ],
    salaryRange: {
      type: String,
      required: true,
    },
    examples: [
      {
        type: String,
        required: true,
      },
    ],
    resources: [
      {
        title: String,
        url: String,
      },
    ],
    futureScope: [
      {
        type: String,
        required: true,
      },
    ],
    challenges: [
      {
        type: String,
        required: true,
      },
    ],
    commonInterviewQuestions: [
      {
        type: String,
        required: true,
      },
    ],

    // ❌ remove this old inline object:
    // carrerStageSchema: { ... }

    // ✅ use the separate subschema here
    careerProgression: {
      type: [careerStageSchema],
      default: [],
    },

    certifications: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    keytools: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    faqs: {
    type: [faqSchema],
    default: [],
  },
  },
  { timestamps: true }
);

const subject =
  mongoose.models.subject || mongoose.model("subject", SubjectSchema);

export default subject;
