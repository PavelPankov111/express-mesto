/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */
const express = require('express');
const usersRoutes = require('./routes/users.js');
const cardsRoutes = require('./routes/cards.js');
const mongoose = require('mongoose');
const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '5f9df71421cdf404dac90076' // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
})
app.use('/', usersRoutes);
app.use('/', cardsRoutes);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

