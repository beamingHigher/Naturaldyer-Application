const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  patternId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Pattern',
    required: true
  },
  code: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  minimumWeight: {
    type: Number,
    required: true
  },
  maximumWeight: {
    type: Number,
    required: true
  },
  beatsNumber: {
    type: Number,
    trim: true
  },
  order: {
    type: Number,
    trim: true
  },
  description: {
    type: String
  },
  notes: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

moduleSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'patternId',
    select: 'code'
  });

  next();
})


const Module = mongoose.model('Module', moduleSchema);
module.exports = Module;
