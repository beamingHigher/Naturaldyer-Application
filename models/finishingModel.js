const mongoose = require('mongoose');

const finishingSchema = new mongoose.Schema({
  finishing_type: {
    type: String,
    required: true,
    trim: true,
    enum: [
      // Details missed
    ],
    default: ''
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  supplier: {
    required: true,
    // User Schema
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  active: {
    type: Boolean,
    default: true
  }
});

const Finishing = mongoose.model('Finishing', finishingSchema);
module.exports = Finishing;
