const express = require('express');
const orderController = require('../controllers/orderController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(orderController.getOrders)
  .post(authController.protect,
    authController.restrictTo('admin'),
    orderController.createOrder);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    orderController.updateOrder
  )
  .delete(
    authController.protect,
    orderController.deleteOrder
  );
  
module.exports = router;