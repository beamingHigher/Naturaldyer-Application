const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    length: {
        type: Number
    },
    plotsReduction: {
        type: Number
    },
    description: {
        type: String
    },
    notes: {
        type: String
    },
    active: {
        type: Boolean,
        default: false
    },
    collectionId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Collection',
        required: true
    }
});

sizeSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'collectionId',
      select: 'name'
    });
  
    next();
})



const Size = mongoose.model('Size', sizeSchema);
module.exports = Size;