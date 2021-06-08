const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  addressLabel: {
    type: String,
    required: [true, 'Address must have Label'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Please enter address details'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Please select your country'],
    trim: true
  },
  region: {
    type: String,
    trim: true
  },
  province: {
    type: String,
    required: [true, 'Please provide your province'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'Please select your city'],
    trim: true
  },
  zipCode: {
    type: String,
    required: true,
    trim: true
  },
  default: {
    type: Boolean
  }
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
