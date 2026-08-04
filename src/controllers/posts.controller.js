const Post = require("../lib/models/post.model");
const createHttpError = require("http-errors");

// TODO Iteracion 4: Implementar cada funcion y exportarlas al final del archivo

const list = async (req, res, next) => {
  const post = await Post.find().populate("author");
  res.json(post);
};

const create = async (req, res, next) => {
  let post = await Post.create({
    ...req.body,
    author: req.user._id,
  });

  post = await post.populate("author");
  res.status(201).json(post);
};

const detail = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id)
    .populate("author")
    .populate({ path: "comments", populate: { path: "author" } });

  if (post) res.json(post);
  else next(createHttpError(404, "Post not found"));
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    returnDocument: "after",
  });
  if (post) res.json(post);
  else next(createHttpError(404, "Post not found"));
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);

  if (post) res.status(204).send();
  else next(createHttpError(404, "Post not found"));
};

module.exports = { list, create, detail, update, remove };
