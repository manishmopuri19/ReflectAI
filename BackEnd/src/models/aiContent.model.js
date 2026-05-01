import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

const flashcardSchema = new mongoose.Schema({
  front: String,
  back: String,
});

const aiContentSchema = new mongoose.Schema(
  {
    documentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    summary: String,

    quizzes: [quizSchema],

    flashcards: [flashcardSchema],
  },
  { timestamps: true }
);

export default mongoose.model("AIContent", aiContentSchema);