const express = require('express');
const authController = require('../controllers/authController')
const productCategoryController = require('../controllers/productCategoryController');
const fileController = require('../controllers/fileController');

const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, productCategoryController.getAllproductCategory)
  .post(authController.isLoggedIn, fileController.uploadPhoto, productCategoryController.createproductCategory);

router
  .route('/:id')
  .get(authController.isLoggedIn, productCategoryController.getproductCategory)
  .patch(authController.isLoggedIn, productCategoryController.updateproductCategory)
  .delete(authController.isLoggedIn, productCategoryController.deleteproductCategory);
  
module.exports = router;
