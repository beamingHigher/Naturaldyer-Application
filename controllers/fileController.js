const multer = require('multer')


const multerStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'public/img/uploads')
    },
    filename: (req,file,cb) => {
        const ext = file.mimetype.split('/')[1]
        cb(null,`image-${Date.now()}.${ext}`)
    }
});

const multerFilter = (req, file, cb) => {
    console.log('multerFilter');
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.uploadPhoto = upload.single('image');