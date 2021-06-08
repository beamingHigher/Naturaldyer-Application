const mongoose = require('mongoose');


const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'please provide the name of product category'],
        trim: true
    },
    image: {
        type: String,
        default: 'default.jpg'
    },
    description: {
        type: String,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    },
    active: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
      }
});

const productCategory = mongoose.model('productCategory', productCategorySchema);

module.exports = productCategory;
