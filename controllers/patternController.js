const Pattern = require('../models/patternModel');
const Size = require('../models/sizeModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllPattern = factory.getAll(Pattern);
exports.createPattern= factory.createOne(Pattern);
exports.getPattern = factory.getOne(Pattern);
exports.updatePattern = factory.updateOne(Pattern);
exports.deletePattern = factory.deleteOne(Pattern);

exports.index = factory.index(Pattern, 'patterns', 'All Patterns');
exports.newPattern = factory.create(Pattern,'patterns', 'Create New pattern')
exports.editPattern = factory.edit(Pattern,'patterns', 'Edit pattern')

exports.newPattern = catchAsync(async (req, res, next) => {
    const allActiveSize = await Size.find({active:true},{name:1});
    user = res.locals.user
    console.log('active size')
    console.log(allActiveSize)

    res.status(200).render('users/patterns/create', {
        title: 'Create New Patterns',
        user,
        allActiveSize
    });
});