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
