/* eslint-disable no-console */
const Card = require('../models/card');

module.exports.getCards = async (req, res) => {
  try {
    const card = await Card.find({});
    res.status(200).send(card);
  } catch (err) {
    console.log(`ERROR: ${err.name}`);
    console.log(`ERROR: ${err.message}`);

    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Введены некорректные данные!' });
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.postCards = async (req, res) => {
  try {
    const { name, link } = req.body;
    console.log(req.user._id);
    const card = await Card.create({ name, link, owner: req.user._id });
    res.status(200).send(card);
  } catch (err) {
    console.log(`ERROR: ${err.name}`);
    console.log(`ERROR: ${err.message}`);

    if (err.name === 'ValidationError') {
      res.status(400).send({ message: 'Введены некорректные данные!' });
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.deleteCards = (req, res) => {
  Card.findByIdAndRemove({ _id: req.params.cardId }, (err, docs) => {
    console.log(req.params);
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted : ', docs);
    }
    if (docs === null) {
      res.status(404).send({ message: 'Карточки с таким id - не существует!' });
    }
  })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      console.log(`ERROR: ${err.name}`);
      console.log(`ERROR: ${err.message}`);

      if (err.name === 'CastError') {
        res.status(404).send({ message: 'Карточки с таким id - не существует!' });
      }

      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Введены некорректные данные!' });
      }

      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};
