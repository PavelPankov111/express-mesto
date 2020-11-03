const Card = require('../models/card');

module.exports.getCards = async (req, res) => {
  try {
    const card = await Card.find({});
    res.status(200).send(card);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Введены некорректные данные!' });
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.postCards = async (req, res) => {
  try {
    const { name, link } = req.body;
    const card = await Card.create({ name, link, owner: req.user._id });
    res.status(200).send(card);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Введены некорректные данные!' });
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.deleteCards = (req, res) => {
  Card.findByIdAndRemove({ _id: req.params.cardId })
    .then((card) => {
      if (card === null) {
        res.status(404).send({ message: 'Карточки с таким id - не существует!' });
        return;
      }
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).send({ message: 'Карточки с таким id - не существует!' });
        return;
      }

      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Введены некорректные данные!' });
        return;
      }

      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};
