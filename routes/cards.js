const router = require('express').Router();
const path = require('path');
const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json');
const fsPromises = require('fs').promises;

function readCardsFile(pathUrl) {
  return fsPromises.readFile(pathUrl, { encoding: 'utf8' })
    .then((file) => JSON.parse(file));
}

router.get('/cards', (req, res) => {
  console.log(readCardsFile(jsonDataPath));
  readCardsFile(jsonDataPath)
    .then((data) => {
      res.send(data);
    });
});

module.exports = router;
