const mongoose = require('mongoose');


const loomSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    supplierId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Supplier',
        required: [true,'loom must have supplier ID']
    },
    warpId: {
        type: mongoose.Schema.ObjectId,
        ref: 'warp',
        required: [true,'loom must have warpId']
    },
    chainReduction: {
        type: Number
    },
    costPerBeat: {
        type: Number
    },
    highInCm: {
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
    }
});

loomSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'warpId',
      select: 'title'
    });
  
    next();
})

const Loom = mongoose.model('Loom', loomSchema);
module.exports = Loom;
