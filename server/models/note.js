import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // add the favoriteCount property
    favoriteCount: {
      type: Number,
      default: 0,
    },
    // add the favoritedBy property
    favoritedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    //assigns createdAt and updateAt fields with a data type
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
