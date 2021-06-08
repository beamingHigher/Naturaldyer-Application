const express = require('express');
const authController = require('../controllers/authController')
const collectionController = require('../controllers/collectionController');
const fileController = require('../controllers/fileController');

const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, collectionController.getAllCollection)
  .post(authController.isLoggedIn,fileController.uploadPhoto, collectionController.createCollection);

router
  .route('/:id')
  .get(authController.isLoggedIn, collectionController.getCollection)
  .patch(authController.isLoggedIn, collectionController.updateCollection)
  .delete(authController.isLoggedIn, collectionController.deleteCollection);
  
module.exports = router;
