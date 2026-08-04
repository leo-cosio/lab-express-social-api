const createError = require("http-errors");
const User = require("../lib/models/user.model");
const createHttpError = require("http-errors");

// TODO Iteracion 3: Implementar cada funcion y exportarlas al final del archivo

const ERROR_USER_ALREADY_EXIST = {
  message: "User validation fails",
  errors: {
    username: "Username already exists",
  },
};

const create = async (req, res, next) => {
  const { username } = req.body;

  let user = await User.findOne({ username });

  if (user) {
    return next(createHttpError(409, ERROR_USER_ALREADY_EXIST));
  } else {
    user = await User.create(req.body);
    res.status(201).json(user);
  }
};

const login = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return next(createHttpError(401, "user not found"));
  }

  const match = await user.checkPassword(req.body.password);

  if (!match) {
    return next(createHttpError(401, "invalid password"));
  }

  req.session.userId = user._id;
  res.json(user);
};

const logout = (req, res, next) => {
  req.session.destroy();
  res.status(204).send();
};

const profile = async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("posts");
  res.json(user);
};

module.exports = { create, login, logout, profile };
