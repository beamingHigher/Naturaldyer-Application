const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    if (req.file) req.body.image = req.file.filename
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    // let query = Model.findOne({_id: req.params.yarnId});
    

    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on supplier
    let filter = {};
    if (req.params.supplierId) filter = { supplier: req.params.supplierId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

exports.index = (Model, path, title) =>
  catchAsync(async (req, res, next) => {

    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const data = await features.query;
    

    res.status(200).render('users/' + path + '/index', {
        title,
        data
    });
  });

exports.create = (Model, path, title, popData) => 
  (req, res, next) => {
    user = res.locals.user
    res.status(200).render('users/' + path + '/create', {
      title,
      user
    });
  }


exports.edit = (Model, path,title) =>
  catchAsync(async(req,res,next) =>{
    user = res.locals.user
    // 1) Get  data from collection
    const data = await Model.findById(req.params.id)

    if (!data) {
      return next(new AppError('No document found with that ID', 404));
    }

  
  
    res.status(200).render('users/' + path + '/edit', {
      title,
      data,
      user
    });
  })