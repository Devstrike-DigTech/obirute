const path = require('path');
const multer = require('multer');
const Tribute = require('../models/tributeModel');
const APIFeatures = require('../utils/apiFeature');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

//create Blog
exports.create = catchAsync(async (req, res, next) => {
  const tribute = await Tribute.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tribute,
    },
  });
});

//get Blog
exports.get = catchAsync(async (req, res, next) => {
  const tribute = await Tribute.findById(req.params.id);

  if (!tribute) {
    return next(new AppError('No blog found with that slug', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      tribute,
    },
  });
});

//Get all Blog
exports.getAll = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Tribute.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const tributes = await features.query;
  res.status(200).json({
    status: 'success',
    results: tributes.length,
    data: {
      tributes,
    },
  });
});

//Update blog
exports.update = catchAsync(async (req, res, next) => {
  const tribute = await Tribute.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!tribute) {
    return next(new AppError('No tribute found with that slug', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      tribute,
    },
  });
});

//
exports.delete = catchAsync(async (req, res, next) => {
  const tribute = await Tribute.findByIdAndDelete(req.params.id);
  if (!tribute) {
    return next(new AppError('No tribute found with that slug', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

//multer
const multerStorageImage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body);
    cb(null, path.join(__dirname, '../public/img/uploads'));
  },
  filename: (req, file, cb) => {
    console.log(req.body);
    cb(
      null,
      `image_${req.body.name.replace(/\s/g, '')}_${Date.now()}${path.extname(
        file.originalname.trim()
      )}`
    );
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
exports.uploadFile = upload.single('image');

exports.addFileToReqBody = (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }

  next();
};

exports.deleteAllBlog = catchAsync(async (req, res, next) => {});
