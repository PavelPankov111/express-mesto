/* eslint-disable no-useless-escape */
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
    maxlength: 30,
  },
  about: {
    type: String,
    minlength: 2,
    required: true,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const link = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

        return link.test(v);
      },
      message: 'Введите ссылку',
    },
  },
});

module.exports = model('user', userSchema);
