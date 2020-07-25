var express = require('express');
var userCtrl = require('../admin/controller/user.controller');

const router = express.Router();
router.route('/api/v1/getAllRequestsData').post(userCtrl.partnersRequests);

router.route('/api/v1/insertRequestEntry').post(userCtrl.addRequest);

module.exports = router;