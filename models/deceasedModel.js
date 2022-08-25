const { Schema, model } = require('mongoose');

const deceasedSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please input Mums Name.'],
    trim: true,
  },
  bio: {
    type: String,
    required: [true, 'There must be a biography text'],
    trim: true,
  },
  images: {
    type: [String],
  },
});

const Deceased = model('Deceased', deceasedSchema);
module.exports = Deceased;
