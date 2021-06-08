const Yarn = require('../models/yarnModel');
const Supplier = require('../models/supplierModel');
const Colour = require('../models/colourModel');
const productCategory = require('../models/productCategoryModel');
const Warp = require('../models/warpModel');
const Size = require('../models/sizeModel');
const Pattern = require('../models/patternModel');
const Loom = require('../models/loomModel');
const Collection = require('../models/collectionModel');
const Module = require('../models/moduleModel');
const userHandlerFactory = require('../controllers/userViewHandlerFactory');

const catchAsync = require('../utils/catchAsync');



// Spinner
exports.createSpinner = catchAsync(async(req,res) =>{
  user = res.locals.user

  // console.log(user)
  
  res.status(200).render('users/spinner/create', {
      title: 'Add Your Information',
      user
  });
})

