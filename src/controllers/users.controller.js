// const createError = require("http-errors");
// const User = require("../lib/models/user.model");

// TODO Iteracion 3: Implementar cada funcion y exportarlas al final del archivo

const create = async (req, res, next) => {
  // TODO: Comprobar si ya existe un usuario con el mismo username → 409
  // TODO: Si no existe, crear el usuario → 201
};

const login = async (req, res, next) => {
  // TODO: Buscar el usuario por email
  // TODO: Verificar la password con user.checkPassword(password)
  // TODO: Si las credenciales son incorrectas → 401
  // TODO: Si son correctas, guardar req.session.userId = user._id → 200
};

const logout = (req, res, next) => {
  // TODO: Destruir la sesion con req.session.destroy() → 204
};

const profile = async (req, res, next) => {
  // TODO: Buscar el usuario por req.user._id con .populate("posts") → 200
};

module.exports = { create, login, logout, profile };
