const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');
const userViewRoutes = require('./routes/userViewRoutes');
const yarnRoutes = require('./routes/yarnRoutes');
const colourRoutes = require('./routes/colourRoutes');
const productCategoryRoutes = require('./routes/productCategoryRoutes');
const warpRoutes = require('./routes/warpRoutes');
const loomRoutes = require('./routes/loomRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const sizeRoutes = require('./routes/sizeRoutes');
const patternRoutes = require('./routes/patternRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const spinnerRoutes = require('./routes/spinnerRoutes');

// Start express app
const app = express();

app.enable('trust proxy');

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

// Implement CORS
app.use(cors());
// Access-Control-Allow-Origin *
// api.naturaldyer.com, front-end naturaldyer.com
// app.use(cors({
//    origin: 'https://www.naturaldyer.com'
// }))

app.options('*', cors());
// app.options('/api/v1/fabric/:id', cors());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
//app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);


// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

  
//Routes
app.use('/', viewRouter);
app.use('/user', userViewRoutes);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/yarns', yarnRoutes);
app.use('/api/v1/colours', colourRoutes);
app.use('/api/v1/productCategorys', productCategoryRoutes);
app.use('/api/v1/warps', warpRoutes);
app.use('/api/v1/looms', loomRoutes);
app.use('/api/v1/collections', collectionRoutes);
app.use('/api/v1/sizes', sizeRoutes);
app.use('/api/v1/patterns', patternRoutes);
app.use('/api/v1/modules', moduleRoutes);
app.use('/api/v1/spinner', spinnerRoutes);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

app.use(globalErrorHandler);

module.exports = app;