const Loom = require('../models/loomModel');
const Warp = require('../models/warpModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllLoom = factory.getAll(Loom);
exports.createLoom = factory.createOne(Loom);
exports.getLoom = factory.getOne(Loom);
exports.updateLoom = factory.updateOne(Loom);
exports.deleteLoom = factory.deleteOne(Loom);

exports.index = factory.index(Loom, 'looms', 'All Loom');
// exports.newLoom = factory.create(Loom,'looms', 'Create New Loom')
exports.editLoom = factory.edit(Loom,'looms', 'Edit Loom')

exports.newLoom = catchAsync(async (req, res, next) => {
    const allActiveWarp = await Warp.find({active:true},{code:1});
    user = res.locals.user

    res.status(200).render('users/looms/create', {
        title: 'Create New Loom',
        user,
        allActiveWarp
    });
});