const express = require('express');
const authController = require('../controllers/authController')
const warpController = require('../controllers/warpController');
const fileController = require('../controllers/fileController');


const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, warpController.getAllWarp)
  .post(authController.isLoggedIn,fileController.uploadPhoto, warpController.createWarp);

router
  .route('/:id')
  .get(authController.isLoggedIn, warpController.getWarp)
  .patch(authController.isLoggedIn, warpController.updateWarp)
  .delete(authController.isLoggedIn, warpController.deleteWarp);
  
module.exports = router;
