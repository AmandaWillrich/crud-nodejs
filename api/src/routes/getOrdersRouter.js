const router = require('express-promise-router')();
const getOrdersController = require('../controllers/getOrdersController');


router.get('/get-orders', getOrdersController.getOrdersController);

module.exports = router;