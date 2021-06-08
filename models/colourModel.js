const mongoose = require('mongoose');

const colourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    // required: true,
    trim: true
  },
  yarnId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Yarn',
    required: true
  },
  hexadecimalColour: {
    type: String,
    trim: true
  },
  code: {
    type: String,
    required: true,
    trim: true
  },
  costperKilograms: {
    type: Number,
    trim: true
  },
  supplement: {
    type: Number,
    trim: true
  },
  supplementCost: {
    type: Number,
    default: 0,
    trim: true
  },
  samplePrice:{
    type: Number,
    default: 0,
    trim: true
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

colourSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'yarnId',
    select: 'title'
  });

  next();
});

const Colour = mongoose.model('Colour', colourSchema);
module.exports = Colour;
