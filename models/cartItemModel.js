const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product_fabric: {
    required: true,
    type: mongoose.Types.ObjectId,
    ref: 'Fabric'
  },
  product_type: {
    required: true,
    enum: [
      'Fabric',
      'Product'
    ]
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Minimum quantity 1']
  },
  total_price: {
    type: Number,
    required: true
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;
