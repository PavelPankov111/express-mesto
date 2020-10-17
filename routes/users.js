/* eslint-disable consistent-return */
const router = require('express').Router();
const path = require('path');
const jsonDataPath = path.join(__dirname, '..', 'data', 'users.json');
const fsPromises = require('fs').promises;

function readUsersFile(pathUrl) {
  return fsPromises.readFile(pathUrl, { encoding: 'utf8' })
    .then((file) => JSON.parse(file));
}

router.get('/users', (req, res) => {
  readUsersFile(jsonDataPath)
    .then((data) => {
      res.send(data);
    });
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  return readUsersFile(jsonDataPath)
    .then((data) => {
      const userToFind = data.find((user) => user._id === id);
      return userToFind;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    });
});

module.exports = router;
