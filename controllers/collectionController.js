const Collection = require('../models/collectionModel');
const Loom = require('../models/loomModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllCollection = factory.getAll(Collection);
exports.createCollection = factory.createOne(Collection);
exports.getCollection = factory.getOne(Collection);
exports.updateCollection = factory.updateOne(Collection);
exports.deleteCollection = factory.deleteOne(Collection);


exports.index = factory.index(Collection, 'collections', 'All Collection');
// exports.newCollection = factory.create(Collection,'collections', 'Create New collection')
exports.editCollection = factory.edit(Collection,'collections', 'Edit collection')

exports.newCollection = catchAsync(async (req, res, next) => {
    const allActiveLoom = await Loom.find({active:true},{name:1});
    user = res.locals.user
    console.log(allActiveLoom)

    res.status(200).render('users/collections/create', {
        title: 'Create New Collection',
        user,
        allActiveLoom
    });
});