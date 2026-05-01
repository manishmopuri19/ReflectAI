import mongoose from "mongoose";

const discussionMessageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: String,
  upvotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const discussionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    documentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
    },

    studySpaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudySpace",
    },

    messages: [discussionMessageSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Discussion", discussionSchema);