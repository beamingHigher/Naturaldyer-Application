const Spinner = require('../models/spinnerModel');
const factory = require('./handlerFactory');

exports.getAllSpinner = factory.getAll(Spinner);
exports.createSpinner = factory.createOne(Spinner);
exports.getSpinner = factory.getOne(Spinner);
exports.updateSpinner = factory.updateOne(Spinner);
exports.deleteSpinner = factory.deleteOne(Spinner);