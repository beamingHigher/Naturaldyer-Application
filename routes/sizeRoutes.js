const express = require('express');
const authController = require('../controllers/authController')
const sizeController = require('../controllers/sizeController');
const fileController = require('../controllers/fileController');
const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, sizeController.getAllSize)
  .post(authController.isLoggedIn,fileController.uploadPhoto, sizeController.createSize);

router
  .route('/:id')
  .get(authController.isLoggedIn, sizeController.getSize)
  .patch(authController.isLoggedIn, sizeController.updateSize)
  .delete(authController.isLoggedIn, sizeController.deleteSize);
  
module.exports = router;
