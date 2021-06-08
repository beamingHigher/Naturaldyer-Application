const Size = require('../models/sizeModel');
const factory = require('./handlerFactory');
const Collection = require('../models/collectionModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllSize = factory.getAll(Size);
exports.createSize = factory.createOne(Size);
exports.getSize = factory.getOne(Size);
exports.updateSize = factory.updateOne(Size);
exports.deleteSize = factory.deleteOne(Size);


exports.index = factory.index(Size, 'sizes', 'All Size');

exports.newSize = catchAsync(async (req, res, next) => {
    const allActiveCollection = await Collection.find({active:true},{name:1});
    user = res.locals.user
    console.log(allActiveCollection)

    res.status(200).render('users/sizes/create', {
        title: 'Create New Size',
        user,
        allActiveCollection
    });
});

exports.editSize = factory.edit(Size,'sizes', 'Edit Size')


