const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      default: "codeblog",
    },
    title: {
      type: String,
      required: true,
    },
    imageOne: {
      type: String,
    },
    imageTwo: {
      type: String,
    },
    linkText: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    messageOne: {
      type: String,
      required: true,
    },
    messageTwo: {
      type: String,
    },
    quote: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Posts", PostSchema);
