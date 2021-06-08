const mongoose = require('mongoose');

const fabricSchema = new mongoose.Schema({
  patternId: {
    required: true,
    type: mongoose.Types.ObjectId,
    ref: 'Pattern'
  },
  article:{
    type: String,
    required: true,
    trim: true
  },
  length: {
    type: Number,
    required: true
  },
  finishingId: {
    required: true,
    // Finishing Schema
    type: mongoose.Types.ObjectId,
    ref: 'Finishing'
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
    // User Schema
  },
  discount: {
    type: Number
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  orderId: {
    required: true,
    // Order Schema
    type: mongoose.Types.ObjectId,
    ref: 'Order'
  }
});

const Fabric = mongoose.model('Fabric', fabricSchema);
module.exports = Fabric;
