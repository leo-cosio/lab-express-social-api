const createError = require("http-errors");
// const User = require("../lib/models/user.model");

module.exports = async (req, res, next) => {
  try {
    // TODO Iteracion 2: Verificar que req.session.userId existe
    //   Si no existe → next(createError(401, "session not found"))

    // TODO Iteracion 2: Buscar el usuario en la BD con req.session.userId
    //   Si no existe → next(createError(401, "session user not found"))

    // TODO Iteracion 2: Asignar el usuario a req.user y llamar a next()

    next(); // elimina esta linea cuando implementes el middleware
  } catch (error) {
    next(error);
  }
};
