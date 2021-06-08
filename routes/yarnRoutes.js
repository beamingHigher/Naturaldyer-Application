const express = require('express');
const authController = require('../controllers/authController')
const yarnController = require('../controllers/yarnController');

const fileController = require('../controllers/fileController');

const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, yarnController.getAllYarn)
  .post(authController.isLoggedIn, fileController.uploadPhoto, yarnController.createYarn);

router
  .route('/:id')
  .get(authController.isLoggedIn, yarnController.getYarn)
  .patch(authController.isLoggedIn, yarnController.updateYarn)
  .delete(authController.isLoggedIn, yarnController.deleteYarn);
  
module.exports = router;
