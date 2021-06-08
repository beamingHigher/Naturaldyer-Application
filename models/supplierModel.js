const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, 'Please provide your Business name'],
    trim: true,
    maxlength: 100
  },
  supplierType: {
    type: String,
    required: [true, 'Please select your type'],
    enum: [ 'Spinner', 'Weaver']
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true,'supplier must be a user']
  },
  telephone: {
    type: String,
    trim: true
  },
  bank: {
    type: String,
    trim: true
  },
  iban: {
    type: String,
    trim: true
  },
  bic: {
    type: String,
    trim: true
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

const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;
