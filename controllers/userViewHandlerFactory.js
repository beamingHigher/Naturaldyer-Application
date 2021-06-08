const catchAsync = require('./../utils/catchAsync');


exports.getAll = (Model, path, title) =>
  catchAsync(async (req, res, next) => {
    const data = await Model.find()
  
    // console.log(data)

    res.status(200).render('users/' + path + '/index', {
        title,
        data
    });
  });

exports.create = (Model, path,title) => 

  (req,res,next) =>{
    user = res.locals.user
    // console.log(user)
    res.status(200).render('users/' + path + '/create', {
      title,
      user
    });
  }


exports.edit = (Model, path,title) =>
  catchAsync(async(req,res,next) =>{
    user = res.locals.user
    // console.log(user)
    // 1) Get  data from collection
    // console.log(req.params.id)
    const data = await Model.findById(req.params.id)
  
    // console.log(data)
  
    res.status(200).render('users/' + path + '/edit', {
      title,
      data,
      user
    });
  })