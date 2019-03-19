const isLoggedIn = (req, res, next) => {
	if (req.session.passport) {
		return next();
	}
	res.status(403).json({
		code: 2, //403 forbidden
		message: 'You are not allowed to see this page'
	});
};

const logOut = (req, res) => {
	req.session.destroy(() => {
		res.send({
			code: 0,
			message: 'Logout was succesful'
		});
	});
};

module.exports = {
	isLoggedIn,
	logOut
};
