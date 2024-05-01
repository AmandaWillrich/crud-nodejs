const router = require('express-promise-router')();
const updateOrderByIdController = require('../controllers/updateOrderByIdController');


router.post('/update-order/:id', updateOrderByIdController.updateOrderByIdController);

module.exports = router;