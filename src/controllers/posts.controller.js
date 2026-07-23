// const createError = require("http-errors");
// const Post = require("../lib/models/post.model");

// TODO Iteracion 4: Implementar cada funcion y exportarlas al final del archivo

const list = async (req, res, next) => {
  // TODO: Devolver todos los posts con author populado → 200
};

const create = async (req, res, next) => {
  // TODO: Crear post (author = req.user._id, no viene del body)
  // TODO: Poblar author en la respuesta → 201
};

const detail = async (req, res, next) => {
  // TODO: Devolver post con author y virtual "comments" populados (populate anidado para author de cada comment)
  // TODO: Si no existe → 404
};

const update = async (req, res, next) => {
  // TODO: Actualizar con findByIdAndUpdate({ runValidators: true, returnDocument: "after" })
  // TODO: Si no existe → 404
};

const remove = async (req, res, next) => {
  // TODO: Eliminar post con findByIdAndDelete
  // TODO: Si no existe → 404, si existe → 204
};

module.exports = { list, create, detail, update, remove };
