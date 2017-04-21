const
	express = require('express'),
	path = require('path'),
	loginRouter = require('./login');
	logoutRouter = require('./logout');
	accountRouter = require('./account');

var router = express.Router();

router.get('/', express.static(__dirname + '/../client'));

router.get('/', function(req, res) {
		res.sendFile(path.resolve('client/src/index.html'));
});
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/account', accountRouter);

module.exports = router;

