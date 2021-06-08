const Token = require("../models/tokenModel");
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getHome = (req, res) => {

  user = res.locals.user
  res.status(200).render('home', {
    title: 'Home',
    user
  });
};

exports.getAbout = (req, res) => {
  res.status(200).render('about', {
    title: 'About'
  });
};

exports.getContact = (req, res) => {
  res.status(200).render('contact', {
    title: 'Contact'
  });
};

exports.getHowItWorks = (req, res) => {
  res.status(200).render('how-it-works', {
    title: 'How it Works'
  });
};

exports.getRegistrationForm = (req, res) => {
  res.status(200).render('register', {
    title: 'Register'
  });
};

exports.getLogin = (req, res) => {
  res.status(200).render('login', {
    title: 'Login'
  });
}

exports.getDashboard = (req, res) => {
  res.status(200).render('users/user/dashboard', {
    title: 'Naturaldyers | Dashboard',
    user: res.locals.user
  });
};

exports.deposit = (req, res) => {
  res.status(200).render('users/user/deposit', {
    title: 'Deposit'
  });
};

exports.withdraw = (req, res) => {
  res.status(200).render('users/user/withdraw', {
    title: 'Withdraw'
  });
};

exports.profile = (req, res) => {
  user = res.locals.user
  res.status(200).render('users/user/profile', {
    title: 'Your Profile',
    user
  });
};

exports.order = (req, res) => {
  res.status(200).render('users/user/report', {
    title: 'Your Orders'
  });
};

exports.calendar = (req, res) => {
  res.status(200).render('users/user/calendar', {
    title: 'Calendar'
  });
};

exports.confirmEmail = catchAsync(async (req, res, next) => {
  const userToken = await Token.findOne({ token: req.params.token  })
  // console.log(userToken)
  if (!userToken){
    return next(new AppError('Your verification link may have expired. Please click on resend for verify your Email.', 400));
  }
  else if(!userToken.userId){
    return next(new AppError('We were unable to find a user for this verification. Please SignUp!', 400));
  }
  else if(userToken.userId.isVerified){
    return next(new AppError('User has been already verified. Please Login'))
  }
  else{
    // console.log(userToken.userId._id)
    const updatedUser = await User.findByIdAndUpdate(userToken.userId._id, {isVerified: true}, {
      new: true,
      runValidators: true
    });
  }
  
  res.status(200).render('users/dashboard', {
    title: 'Naturaldyers | Dashboard',
    user: userToken.userId
  });
});

exports.getError = (req, res) => {
  res.status(200).render('error', {
    title: 'Error'
  });
};

exports.getLoginError = (req, res) => {
  res.status(200).render('loginError', {
    title: 'Error'
  });
};
