const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    // TODO Iteracion 1: Definir los campos del esquema
    // name:     String, required
    // username: String, required, trim, unique
    // email:    String, required, trim, lowercase, match: [/^\S+@\S+\.\S+$/, "Invalid email"]
    // password: String, required, trim, match: [/^.{8,}$/, "Min 8 characters"]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      // TODO Iteracion 1: Anadir transform para:
      //   - Exponer id (ret.id = ret._id.toString())
      //   - Eliminar _id, __v y password
    },
  },
);

// TODO Iteracion 1: Virtual "posts"
//   Devuelve todos los Post cuyo author sea igual al _id de este usuario
// userSchema.virtual("posts", {
//   ref: "Post",
//   localField: "_id",
//   foreignField: "author",
// });

// TODO Iteracion 1: Pre-save hook
//   Antes de guardar, si password fue modificado, hashea con bcrypt (salt 10)
// userSchema.pre("save", async function () { ... });

// TODO Iteracion 1: Metodo de instancia checkPassword(plain)
//   Compara la password en texto plano con this.password usando bcrypt.compare
// userSchema.methods.checkPassword = function (plain) { ... };

module.exports = mongoose.model("User", userSchema);
