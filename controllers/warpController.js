const Warp = require('../models/warpModel');
const productCategory = require('../models/productCategoryModel');
const catchAsync = require('./../utils/catchAsync');

const factory = require('./handlerFactory');

exports.getAllWarp = factory.getAll(Warp);
exports.createWarp = factory.createOne(Warp);
exports.getWarp = factory.getOne(Warp);
exports.updateWarp = factory.updateOne(Warp);
exports.deleteWarp = factory.deleteOne(Warp);

exports.index = factory.index(Warp, 'warps', 'All Warps');
// exports.newWarp = factory.create(Warp,'warps', 'Create New Warp')
exports.editWarp = factory.edit(Warp,'warps', 'Edit Warp')

exports.newWarp = catchAsync(async (req, res, next) => {
    const allActiveCollection = await productCategory.find({active:true},{name:1});
    user = res.locals.user
    console.log(allActiveCollection)
 
    res.status(200).render('users/warps/create', {
        title: 'Create New Warp',
        user,
        allActiveCollection
    });
});


