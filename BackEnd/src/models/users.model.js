import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    mobile: {
      type: String,
      match: /^[0-9]{10}$/,
    },

    studySpaces: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudySpace",
      }
    ]
  },
  { timestamps: true }
);

userSchema.index({ email: 1 });

export const User = mongoose.model("User", userSchema);