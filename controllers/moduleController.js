const Module = require('../models/moduleModel');
const Pattern = require('../models/patternModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllModule = factory.getAll(Module);
exports.createModule = factory.createOne(Module);
exports.getModule = factory.getOne(Module);
exports.updateModule = factory.updateOne(Module);
exports.deleteModule = factory.deleteOne(Module);

exports.index = factory.index(Module, 'modules', 'All Module');
// exports.newModule = factory.create(Module,'modules', 'Create New Module')
exports.editModule = factory.edit(Module,'modules', 'Edit Module')

exports.newModule = catchAsync(async (req, res, next) => {
    const allActivePattern = await Pattern.find({active:true},{code:1});
    user = res.locals.user
    console.log(allActivePattern)

    res.status(200).render('users/modules/create', {
        title: 'Create New Module',
        user,
        allActivePattern
    });
});