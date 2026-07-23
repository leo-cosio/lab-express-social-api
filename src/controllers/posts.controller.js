const { Router } = require("express");
// const createError = require("http-errors");
// const Post = require("../lib/models/post.model");
// const auth = require("../middlewares/auth.mid");

const router = Router();

// TODO Iteracion 4: GET /posts — listar todos los posts (requiere auth)
//   - Populate author → 200 con array

// TODO Iteracion 4: POST /posts — crear post (requiere auth)
//   - author debe ser req.user._id, no viene del body
//   - Populate author en la respuesta → 201

// TODO Iteracion 4: GET /posts/:id — detalle de un post (requiere auth)
//   - Populate author
//   - Populate virtual "comments" con sus authors (populate anidado)
//   - Si no existe → 404

// TODO Iteracion 4: PATCH /posts/:id — actualizar post (requiere auth)
//   - Usa findByIdAndUpdate con { runValidators: true, returnDocument: "after" }
//   - Si no existe → 404

// TODO Iteracion 4: DELETE /posts/:id — eliminar post (requiere auth)
//   - Si no existe → 404
//   - Si existe → 204 (sin cuerpo)

module.exports = router;
