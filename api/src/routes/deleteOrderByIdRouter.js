const router = require('express-promise-router')();
const deleteOrderByIdController = require('../controllers/deleteOrderByIdController');


router.post('/delete-order/:id', deleteOrderByIdController.deleteOrderByIdController);

module.exports = router;