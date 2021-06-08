const express = require('express');
const authController = require('../controllers/authController')
const patternController = require('../controllers/patternController');
const fileController = require('../controllers/fileController');

const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, patternController.getAllPattern)
  .post(authController.isLoggedIn,fileController.uploadPhoto, patternController.createPattern);

router
  .route('/:id')
  .get(authController.isLoggedIn, patternController.getPattern)
  .patch(authController.isLoggedIn, patternController.updatePattern)
  .delete(authController.isLoggedIn, patternController.deletePattern);
  
module.exports = router;
