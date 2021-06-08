const express = require('express');
const authController = require('../controllers/authController')
const supplierController = require('../controllers/supplierController');

const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, supplierController.getAllSupplier)
  .post(authController.isLoggedIn, supplierController.createSupplier)

router
  .route('/:id')
  .get(authController.isLoggedIn, supplierController.getSupplier)
  .patch(authController.isLoggedIn, supplierController.updateSupplier)
  .delete(authController.isLoggedIn, supplierController.deleteSupplier)
  
module.exports = router;
