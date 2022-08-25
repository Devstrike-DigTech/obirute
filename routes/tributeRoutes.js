const express = require('express');
const tributeController = require('../controller/tributeController');
// const authController = require('../controller/authController');

const router = express.Router();

// router.use(authController.protect)

// router.use(authController.restrictTo('admin'))

router.route('/').post(tributeController.create).get(tributeController.getAll);

router
  .route('/:id')
  .patch(tributeController.update)
  .delete(tributeController.delete)
  .get(tributeController.get);

module.exports = router;
