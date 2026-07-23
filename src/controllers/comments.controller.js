// const createError = require("http-errors");
// const Comment = require("../lib/models/comment.model");

// TODO Iteracion 5 [Bonus]: Implementar cada funcion y exportarlas al final del archivo

const create = async (req, res, next) => {
  // TODO: Crear comentario (author = req.user._id, post = req.params.id) → 201
};

const remove = async (req, res, next) => {
  // TODO: Eliminar comentario por req.params.commentId
  // TODO: Si no existe → 404, si existe → 204
};

module.exports = { create, remove };
