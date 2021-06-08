const express = require('express');
const authController = require('../controllers/authController')
const loomController = require('../controllers/loomController');
const fileController = require('../controllers/fileController');


const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, loomController.getAllLoom)
  .post(authController.isLoggedIn,fileController.uploadPhoto, loomController.createLoom);

router
  .route('/:id')
  .get(authController.isLoggedIn, loomController.getLoom)
  .patch(authController.isLoggedIn, loomController.updateLoom)
  .delete(authController.isLoggedIn, loomController.deleteLoom);
  
module.exports = router;
