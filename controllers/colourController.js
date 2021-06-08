const Colour = require('../models/colourModel');
const Yarn = require('../models/yarnModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');



exports.getAllColour = factory.getAll(Colour);
exports.createColour = factory.createOne(Colour);
exports.getColour = factory.getOne(Colour);
exports.updateColour = factory.updateOne(Colour);
exports.deleteColour = factory.deleteOne(Colour);


exports.index = factory.index(Colour, 'colours', 'All colours');
// exports.newColour = factory.create(Colour, 'colours', 'Create colours'); 
exports.newColour = catchAsync(async (req, res, next) => {
    const allActiveColours = await Yarn.find({activeForBusiness:true},{title:1});
    user = res.locals.user
    // console.log(allActiveCollection)

    res.status(200).render('users/colours/create', {
        title: 'Create New Colour',
        user,
        allActiveColours
    });
});

// exports.editColour = factory.edit(Colour, 'colours', 'Edit colours');

exports.editColour = catchAsync(async (req, res, next) => {
    const allActiveYarn = await Yarn.find({activeForBusiness:true},{title:1});

    const data = await Colour.findById(req.params.id)

    if (!data) {
      return next(new AppError('No document found with that ID', 404));
    }

    user = res.locals.user
    // console.log(allActiveYarn)

    res.status(200).render('users/colours/edit', {
        title: ' Edit Colour',
        user,
        allActiveYarn,
        data
    });
});

