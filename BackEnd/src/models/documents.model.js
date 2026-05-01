import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    extractedText: {
      type: String,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    studySpaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudySpace",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Document", documentSchema);