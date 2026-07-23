const { Router } = require("express");
// const createError = require("http-errors");
// const User = require("../lib/models/user.model");
// const auth = require("../middlewares/auth.mid");

const router = Router();

// TODO Iteracion 3: POST /users — registrar nuevo usuario
//   - Comprueba si ya existe un usuario con el mismo username → 409
//   - Si no, crea el usuario → 201

// TODO Iteracion 3: POST /sessions — iniciar sesion
//   - Busca el usuario por email
//   - Verifica la password con user.checkPassword(password)
//   - Si las credenciales son incorrectas → 401
//   - Si son correctas, guarda req.session.userId = user._id → 200

// TODO Iteracion 3: DELETE /sessions — cerrar sesion (requiere auth)
//   - Destruye la sesion con req.session.destroy() → 204

// TODO Iteracion 3: GET /users/me — perfil del usuario autenticado (requiere auth)
//   - Declara esta ruta ANTES de cualquier ruta con /:id
//   - Busca el usuario por req.user._id con populate("posts") → 200

module.exports = router;
