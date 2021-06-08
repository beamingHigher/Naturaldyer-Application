const mongoose = require('mongoose');

const spinnerSchema = new mongoose.Schema({
    companyName: {
      type: String,
      required: [true, 'Please provide your Business name'],
      trim: true,
      maxlength: 100
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true,'spinner must be a user']
    },
    telephone: {
      type: String,
      trim: true
    },
    bussinessCertificate: {
      type: String
    },
    vatNumber: {
      type: String,
      required: [true,"please provide your VAT number"]
    },
    companyAddress: {
      type: mongoose.Schema.ObjectId,
      ref: "Address",
      // required: [true,"please enter your company address"]
    },
    reference: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    active: {
      type: Boolean,
      default: false,
      select: false
    }
  });
  
  const Spinner = mongoose.model('Spinner', spinnerSchema);
  module.exports = Spinner;
  