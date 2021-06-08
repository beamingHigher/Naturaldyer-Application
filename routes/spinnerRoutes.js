const express = require('express');
const authController = require('../controllers/authController')
const spinnerController = require('../controllers/spinnerController');

const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, spinnerController.getAllSpinner)
  .post(authController.isLoggedIn, spinnerController.createSpinner);

router
  .route('/:id')
  .get(authController.isLoggedIn, spinnerController.getSpinner)
  .patch(authController.isLoggedIn, spinnerController.updateSpinner)
  .delete(authController.isLoggedIn, spinnerController.deleteSpinner);
  
module.exports = router;
