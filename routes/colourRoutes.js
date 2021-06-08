const express = require('express');
const authController = require('../controllers/authController')
const colourController = require('../controllers/colourController');
const fileController = require('../controllers/fileController');

const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, colourController.getAllColour)
  .post(authController.isLoggedIn, fileController.uploadPhoto, colourController.createColour);

router
  .route('/:id')
  .get(authController.isLoggedIn, colourController.getColour)
  .patch(authController.isLoggedIn, colourController.updateColour)
  .delete(authController.isLoggedIn, colourController.deleteColour);
  
module.exports = router;
