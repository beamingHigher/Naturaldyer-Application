const Yarn = require('../models/yarnModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');

exports.getAllYarn = factory.getAll(Yarn);
exports.createYarn = factory.createOne(Yarn);
exports.getYarn = factory.getOne(Yarn);
exports.updateYarn = factory.updateOne(Yarn);
exports.deleteYarn = factory.deleteOne(Yarn);

exports.index = factory.index(Yarn, 'yarns', 'All Yarns');
exports.newYarn = factory.create(Yarn, 'yarns', 'Create Yarns');
exports.editYarn = factory.edit(Yarn, 'yarns', 'Edit Yarns');

