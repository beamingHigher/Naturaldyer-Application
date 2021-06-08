const Supplier = require('../models/supplierModel');
const factory = require('./handlerFactory');

exports.getAllSupplier = factory.getAll(Supplier);
exports.createSupplier = factory.createOne(Supplier);
exports.getSupplier = factory.getOne(Supplier);
exports.updateSupplier = factory.updateOne(Supplier);
exports.deleteSupplier = factory.deleteOne(Supplier);
