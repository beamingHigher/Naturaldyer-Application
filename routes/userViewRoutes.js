const express = require('express');
const router = express.Router();
const productCategoryController = require('../controllers/productCategoryController')
const warpController = require('../controllers/warpController')
const loomController = require('../controllers/loomController')
const collectionController = require('../controllers/collectionController')
const sizeController = require('../controllers/sizeController')
const patternController = require('../controllers/patternController')
const moduleController = require('../controllers/moduleController')
const yarnController = require('../controllers/yarnController')
const colourController = require('../controllers/colourController')
const userViewController = require('../controllers/userViewController')
const authController = require('../controllers/authController')

router.use(authController.isLoggedIn);
// router.use(authController.restrictTo('admin'));
router.use(authController.protect);

//ProductCateory
router.get('/productCategorys/list', productCategoryController.index);
router.get('/productCategorys/create', productCategoryController.newProductCategory);
router.get('/productCategorys/:id', productCategoryController.editProductCategory);

//Warp
router.get('/warps/list', warpController.index);
router.get('/warps/create', warpController.newWarp);
router.get('/warps/:id',  warpController.editWarp);

//looms
router.get('/looms/list', loomController.index);
router.get('/looms/create', loomController.newLoom);
router.get('/looms/:id', loomController.editLoom);

//collections
router.get('/collections/list', collectionController.index);
router.get('/collections/create', collectionController.newCollection);
router.get('/collections/:id', collectionController.editCollection);

//Size
router.get('/sizes/list', sizeController.index);
router.get('/sizes/create', sizeController.newSize);
router.get('/sizes/:id', sizeController.editSize);

//Pattern
router.get('/patterns/list', patternController.index);
router.get('/patterns/create', patternController.newPattern);
router.get('/patterns/:id', patternController.editPattern);

//modules
router.get('/modules/list', moduleController.index);
router.get('/modules/create', moduleController.newModule);
router.get('/modules/:id', moduleController.editModule);

//Yarns
router.get('/yarns/list', yarnController.index);
router.get('/yarns/create', yarnController.newYarn);
router.get('/yarns/:id', yarnController.editYarn);

//Spinner
router.get('/spinner/create', userViewController.createSpinner);

//Colors
router.get('/colours/list', colourController.index);
router.get('/colours/create', colourController.newColour);
router.get('/colours/:id', colourController.editColour);


module.exports = router;