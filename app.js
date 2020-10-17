/* eslint-disable import/no-unresolved */
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/users.js');
const cardsRoutes = require('./routes/cards.js');
const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRoutes);
app.use('/', cardsRoutes);
app.get('*', (req, res) => {
  res.send({ message: 'Запрашиваемый ресурс не найден' }, 404);
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
