import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriptionSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    coachId: {
      type: Schema.Types.ObjectId,
      ref: "coach",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "active", "cancelled", "expired"],
      default: "pending",
    },
    notes: {
      type: String,
    },
    createdBy: {
      type: String, 
      default: "student",
    },
  },
  {
    timestamps: true, 
  }
);

const Subscription =
  mongoose.models.subscription ||
  mongoose.model("subscription", subscriptionSchema);

export default Subscription;
