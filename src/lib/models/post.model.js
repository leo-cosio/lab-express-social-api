const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    // TODO Iteracion 1: Definir los campos del esquema
    // title:  String, required, minLength: 3, maxLength: 200
    // body:   String, required, minLength: 1, maxLength: 1000
    // author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      // TODO Iteracion 1: Anadir transform para:
      //   - Exponer id (ret.id = ret._id.toString())
      //   - Eliminar _id y __v
      //   virtuals: true es necesario para que el virtual "comments" aparezca en JSON
    },
  },
);

// TODO Iteracion 4: Virtual "comments"
//   Devuelve todos los Comment cuyo post sea igual al _id de este post
// postSchema.virtual("comments", {
//   ref: "Comment",
//   localField: "_id",
//   foreignField: "post",
// });

module.exports = mongoose.model("Post", postSchema);
