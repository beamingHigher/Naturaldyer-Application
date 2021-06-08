const express = require('express');
const fabricController = require('./../controllers/fabricController');
const authController = require('./../controllers/authController');

const router = express.Router();


router
  .route('/')
  .get(fabricController.getAllFabric)
  .post(
    authController.protect,
    fabricController.createFabric
  );

router
  .route('/:id')
  .get(fabricController.getFabric)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    fabricController.updateFabric
  )
  .delete(
    authController.protect,
    fabricController.deleteFabric
  );



module.exports = router;
