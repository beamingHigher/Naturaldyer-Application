const mongoose = require('mongoose');



const collectionSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: [true,'collection must have name'],
        trim: true
    },
    additionalPercentage: {
        type: Number
    },
    loomId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Loom',
        required: true
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
        default: true
    }
});

collectionSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'loomId',
      select: 'name'
    });
  
    next();
})


const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
