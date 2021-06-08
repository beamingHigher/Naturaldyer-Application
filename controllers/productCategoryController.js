const productCategory = require('../models/productCategoryModel');
const factory = require('./handlerFactory');

exports.getAllproductCategory = factory.getAll(productCategory);
exports.createproductCategory = factory.createOne(productCategory);
exports.getproductCategory = factory.getOne(productCategory);
exports.updateproductCategory = factory.updateOne(productCategory);
exports.deleteproductCategory = factory.deleteOne(productCategory);


exports.index = factory.index(productCategory, 'productCategorys', 'All productCategorys');
exports.newProductCategory = factory.create( productCategory, 'productCategorys', 'craete New Product Category');
exports.editProductCategory = factory.edit( productCategory, 'productCategorys', 'Edit Product Category');
