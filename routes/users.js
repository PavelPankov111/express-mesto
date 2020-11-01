/* eslint-disable consistent-return */
const router = require('express').Router();
const User = require('../models/user')

router.get('/users', async (req, res) => {
  try{
    const user = await User.find({})
    res.status(200).send(user);
  } catch (err){
    console.log(`ERROR: ${err.name}`)
    console.log(`ERROR: ${err.message}`)

    if(err.name === 'ValidationError'){
      res.status(400).send({message: 'Введены некорректные данные!'})
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  }
});

router.post('/users', async (req, res) => {
  try{
    const {name,avatar,about} = req.body
    console.log(req.body)
    const createUser = await User.create({ name, about, avatar })
    res.status(200).send(createUser)
  } catch (err){
    console.log(`ERROR: ${err.name}`)
    console.log(`ERROR: ${err.message}`)

    if(err.name === 'ValidationError'){
      res.status(400).send({message: 'Введены некорректные данные!'})
    }

    res.status(500).send({ message: 'Ошибка на сервере' })
  }
})

router.get('/users/:id', (req, res) => {
  return User.findById(req.params.id)
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    return res.status(200).send(user);
  })
  .catch((err) => {
    console.log(`ERROR: ${err.name}`)
    console.log(`ERROR: ${err.message}`)

    if(err.name === 'ValidationError'){
      res.status(400).send({message: 'Введены некорректные данные!'})
    }

    res.status(500).send({ message: 'Ошибка на сервере' });
  });
});

module.exports = router;
