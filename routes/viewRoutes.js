const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController')

const router = express.Router();

router.get('/',authController.isLoggedIn, viewController.getHome);
router.get('/about', viewController.getAbout);
router.get('/contact', viewController.getContact);
router.get('/how-it-works', viewController.getHowItWorks);

router.get('/register', viewController.getRegistrationForm);
router.get('/login', viewController.getLogin);
router.get('/error', viewController.getError);
router.get('/loginError', viewController.getLoginError);

router.get('/dashboard', authController.isLoggedIn, authController.protect, viewController.getDashboard);
router.get('/deposit', authController.isLoggedIn, viewController.deposit);
router.get('/withdraw',authController.isLoggedIn, viewController.withdraw);
router.get('/calendar', authController.isLoggedIn, viewController.calendar);
router.get('/order',authController.isLoggedIn, viewController.order);
router.get('/profile', authController.isLoggedIn, viewController.profile);

// It is GET method, you have to write like that
//    app.get('/confirmation/:email/:token',confirmEmail)
router.get('/confirmation/:token', viewController.confirmEmail);

module.exports = router;
