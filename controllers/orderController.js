const Order = require('./../models/orderModel');
const factory = require('./handlerFactory');

exports.getOrders = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
exports.createOrder = factory.createOne(Order);