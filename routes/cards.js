const router = require('express').Router();
const Card = require('../models/card');

router.get('/cards', async (req, res) => {
  try{
    const card =  await Card.find({})
    res.status(200).send(card);
  } catch (err){
    console.log(`ERROR: ${err.name}`)
    console.log(`ERROR: ${err.message}`)

    if(err.name === 'ValidationError'){
      res.status(400).send({message: 'Введены некорректные данные!'})
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
});

router.post('/cards', async (req, res) => {
  try{
    const {name, link} = req.body
    console.log(req.user._id)
    const card = await Card.create({name, link, owner: req.user._id})
    res.status(200).send(card)
  } catch (err){
    console.log(`ERROR: ${err.name}`)
    console.log(`ERROR: ${err.message}`)

    if(err.name === 'ValidationError'){
      res.status(400).send({message: 'Введены некорректные данные!'})
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
})

router.delete('/cards/:cardId', (req, res) =>  {
  Card.findByIdAndRemove({ _id: req.params.cardId }, function(err, docs) {
    console.log(req.params)
    if (err){
      console.log(err)
    }
    else{
      console.log("Deleted : ", docs);
    }
  })
  .then((card) => {
      res.status(200).send(card);
  })
  .catch(err => {
      console.log(err)
      console.log(`ERROR: ${err.name}`)
      console.log(`ERROR: ${err.message}`)

      if(err.name === 'ValidationError'){
        res.status(400).send({message: 'Введены некорректные данные!'})
      }

      res.status(500).send({ message: 'Ошибка на сервере' });
  });
})

module.exports = router;
