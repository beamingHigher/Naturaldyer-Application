const Fabric = require('./../models/fabricModel');
const factory = require('./handlerFactory');
  
exports.getAllFabric = factory.getAll(Fabric);
exports.getFabric = factory.getOne(Fabric);
exports.createFabric = factory.createOne(Fabric);
exports.updateFabric = factory.updateOne(Fabric);
exports.deleteFabric = factory.deleteOne(Fabric);