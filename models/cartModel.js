const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  items: {
    required: true,
    // Collections of items
  },
  sub_total: {
    type: Number,
    required: true,
    default: 0
  }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
