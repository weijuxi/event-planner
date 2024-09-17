const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
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
    enum: ['In progress', 'Completed', 'Cancelled'],
  },
});



const userSchema = new mongoose.Schema({
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
