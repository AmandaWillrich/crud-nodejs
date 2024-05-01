const router = require('express-promise-router')();
const testController = require('../controllers/test.controller');

router.post('/test', testController.testController);

module.exports = router;