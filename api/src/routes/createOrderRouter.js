const router = require('express-promise-router')();
const createOrderController = require('../controllers/createOrderController');


router.post('/create-order', createOrderController.createOrderController);

module.exports = router;