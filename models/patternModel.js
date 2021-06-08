const mongoose = require('mongoose');

const patternSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String
  },
  supplierId: {
    // User Schema
    type: mongoose.Schema.ObjectId,
    ref: 'Supplier'
  },
  sizeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Size'
  },
  moduleNumber: {
    type: Number,
    required:true
  },
  description: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  active: {
    type: Boolean,
    default: false
}
});

patternSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'sizeId',
    select: 'name'
  });

  next();
})

const Pattern = mongoose.model('Pattern', patternSchema);
module.exports = Pattern;
