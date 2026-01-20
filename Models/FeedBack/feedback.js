import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    coachId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CoachUser",
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentUser",
      required: true,
    },
    subscriptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
      required: true,
    },
    sessionSummary: {
      type: String,
      required: true,
      trim: true,
    },
    strengths: {
      type: String,
      trim: true,
    },
    improvements: {
      type: String,
      trim: true,
    },
    nextActions: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

feedbackSchema.index({ coachId: 1, studentId: 1, createdAt: -1 });

export default mongoose.models.Feedback ||
  mongoose.model("Feedback", feedbackSchema);
