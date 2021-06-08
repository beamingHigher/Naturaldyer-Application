const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cartDetails: {
    // Cart Schema
    type: mongoose.Types.ObjectId,
    ref: 'Cart',
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: [
      'Created',
      'Shipped',
      'Completed'
    ]
  },
  paid: {
    type: Boolean,
    default: false
  },
  paymentID: {
    type: String,
    trim: true
  },
  userId: {
    // User Schema
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
