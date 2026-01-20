// Models/Roadmap/roadmap.js
import mongoose, { Schema, models, model } from "mongoose";

const roadmapSchema = new Schema(
  {
    subject: {
      type: Schema.Types.ObjectId,
      ref: "subject",
      required: true,
      unique: true, // one roadmap per subject (for now)
    },
    imagePath: {
      type: String,
      required: true, // e.g. "/roadmaps/dsa.png"
    },
    description: {
      type: String, // optional: extra text about the roadmap
    },
  },
  { timestamps: true }
);

const Roadmap = models.Roadmap || model("Roadmap", roadmapSchema);
export default Roadmap;
