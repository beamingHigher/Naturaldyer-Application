const express = require('express');
const authController = require('../controllers/authController')
const moduleController = require('../controllers/moduleController');
const fileController = require('../controllers/fileController');
const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, moduleController.getAllModule)
  .post(authController.isLoggedIn,fileController.uploadPhoto, moduleController.createModule);

router
  .route('/:id')
  .get(authController.isLoggedIn, moduleController.getModule)
  .patch(authController.isLoggedIn, moduleController.updateModule)
  .delete(authController.isLoggedIn, moduleController.deleteModule);
  
module.exports = router;
