const mongoose = require('mongoose');


const warpSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    material: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        default: 'default.jpg'
    },
    productCategory: {
        type: mongoose.Schema.ObjectId,
        ref: 'productCategory',
        required: [true,'warp must belongs to productCategory'],
    },
    weight: {
        type: Number,
        trim: true
    },
    costPerKg: {
        type: Number,
        trim: true
    },
    supplement: {
        type: Number,
        trim: true
    },
    costSupplement: {
        type: Number,
        trim: true
    },
    colour: {
        type: String,
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
    }
});

warpSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'productCategory',
      select: 'name'
    });
  
    next();
});

const warp = mongoose.model('warp', warpSchema);
module.exports = warp;