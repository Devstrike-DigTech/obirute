const { Schema, model } = require('mongoose');

const tributeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A tribute must have an author'],
    trim: true,
  },
  heading: {
    type: String,
    required: [true, 'Tribute heading is required'],
  },
  relationship: {
    type: String,
    trim: true,
    required: [true, 'The author should have a relationship to the deceased'],
  },
  tribute: {
    type: String,
    required: [true, 'There must be a tribute text'],
    trim: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  image: {
    type: String,
  },
});
const Tribute = model('Tribute', tributeSchema);

module.exports = Tribute;
