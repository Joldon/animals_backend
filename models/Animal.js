// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const AnimalSchema = new Schema({})
const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [75, 'The name can be max 75 chars long']
  },
  latinName: {
    type: String,
    required: [true, 'Please add a Latin name'],
    maxlength: [75, 'The Latin name can be max 75 chars long']
  },
  img: {
    type: String,
    required: [true, 'Please add a URL link'],
    maxlength: [255, 'The URL can be max 255 chars long']
  }
});

// User --> users
// Movie --> movies
module.exports = mongoose.model('Animal', AnimalSchema);