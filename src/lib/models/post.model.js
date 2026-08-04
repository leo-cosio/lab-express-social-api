const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    // TODO Iteracion 1: Definir los campos del esquema
    title: {
      type: String,
      required: "Title is required",
      minLength: 3,
      maxLength: 200,
    },
    body: {
      type: String,
      required: "Text is required",
      minLength: 1,
      maxLength: 1000,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id.toString;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

postSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
});

module.exports = mongoose.model("Post", postSchema);
