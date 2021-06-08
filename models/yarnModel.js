const mongoose = require('mongoose');

const yarnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  supplierId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  material: {
    type: String,
    required: true,
    trim: true
  },
  weight: {
    type: Number,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  notes: {
    type: String,
    trim: true
  },
  activeForBusiness: {
    type: Boolean,
    default: false
  },
  activeForCustomers: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

yarnSchema.pre(/^find/, function(next) {
  this.populate('supplierId')
  next();
});



const Yarn = mongoose.model('Yarn', yarnSchema);
module.exports = Yarn;