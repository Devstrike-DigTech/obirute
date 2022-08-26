const express = require('express');
const deceasedController = require('../controller/deceasedController');
const validationController = require('../controller/validationController');
const validate = require('../validations/deceased');

const router = express.Router();

// router.use(authController.protect)

// router.use(authController.restrictTo('admin'))

router
  .route('/')
  .post(
    deceasedController.uploadFiles,
    deceasedController.addFileToReqBody,
    validationController.validationMiddleware(validate.create),
    deceasedController.create
  )
  .get(deceasedController.get);

router.route('/:id').patch(deceasedController.update);

module.exports = router;
