const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  status : {
    type: Boolean,
    required: true,
  },
});



const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  events: [eventSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
