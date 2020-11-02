const router = require('express').Router();
const { getCards, postCards, deleteCards } = require('../controllers/cards');

router.get('/cards', getCards);

router.post('/cards', postCards);

router.delete('/cards/:cardId', deleteCards);

module.exports = router;
