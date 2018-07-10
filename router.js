'user strict'

var express = require('express'),
	controller = require('./controller'),
	md_auth = require('./auth_middleware'),
	router = express.Router();

router.get('/account/:id', md_auth.ensureAuth, controller.getAccount);
router.get('/accounts', md_auth.ensureAuth, controller.getAccounts);
router.post('/accounts', md_auth.ensureAuth, controller.insertAccounts);
router.put('/accounts', md_auth.ensureAuth, controller.updateAccounts);
router.delete('/accounts', md_auth.ensureAuth, controller.deleteAccounts);

module.exports = router;