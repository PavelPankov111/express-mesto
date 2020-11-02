/* eslint-disable no-console */
/* eslint-disable consistent-return */
const User = require('../models/user');

module.exports.getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send(user);
  } catch (err) {
    console.log(`ERROR: ${err.name}`);
    console.log(`ERROR: ${err.message}`);

    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Введены некорректные данные!' });
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.postUsers = async (req, res) => {
  try {
    const { name, avatar, about } = req.body;
    console.log(req.body);
    const createUser = await User.create({ name, about, avatar });
    res.status(200).send(createUser);
  } catch (err) {
    console.log(`ERROR: ${err.name}`);
    console.log(`ERROR: ${err.message}`);

    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Введены некорректные данные!' });
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.getUsersId = (req, res) => User.findById(req.params.id)
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    return res.status(200).send(user);
  })
  .catch((err) => {
    console.log(`ERROR: ${err.name}`);
    console.log(`ERROR: ${err.message}`);

    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Введены некорректные данные!' });
    }

    if (err.name === 'CastError') {
      res.status(404).send({ message: 'Пользователя с таким id - не существует!' });
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  });