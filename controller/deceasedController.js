const path = require('path');
const multer = require('multer');
const Deceased = require('../models/deceasedModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

//create deceased instance
exports.create = catchAsync(async (req, res, next) => {
  const deceased = await Deceased.create(req.body);

  res.status(201).json({
    status: 'success',
    deceased,
  });
});
//upload deceased info
exports.update = catchAsync(async (req, res, next) => {
  const deceased = await Deceased.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });

  if (!deceased) return next(new AppError('not found', 404));

  res.status(200).json({
    status: 'success',
    deceased,
  });
});

//get deceased info
exports.get = catchAsync(async (req, res, next) => {
  const deceased = await Deceased.find({});

  res.status(200).json({
    status: 'success',
    deceased,
  });
});

//multer
const multerStorageImage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(req);
    cb(null, path.join(__dirname, '../public/img/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `image_${Date.now()}${path.extname(file.originalname.trim())}`);
  },
});

const multerFilterImage = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image. Please upload only images', 400), false);
  }
};

const upload = multer({
  storage: multerStorageImage,
  fileFilter: multerFilterImage,
});
exports.uploadFiles = upload.fields([{ name: 'images', maxCount: 15 }]);

exports.addFileToReqBody = (req, res, next) => {
  const images = [];

  if (req.files.images) {
    //loop through the videos and push to the video array
    req.files.images.forEach((e) => {
      images.push(e.filename);
    });
  }

  req.body.images = images;

  next();
};
