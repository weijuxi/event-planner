const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  description : {
    type: String,
  },
  status : {
    type: String,
    enum: ['In progress', 'Completed', 'Not Started'],
    default: 'Not Started',
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
