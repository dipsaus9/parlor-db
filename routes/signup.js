module.exports = (app, passport) => {
	app.post('/signup', (req, res, next) => {
		passport.authenticate('local-signup', (err, user, info) => {
			if (err) return next(err);
			if (user) {
				req.login(user, (err) => {
					if (err) return next(err);

					const { password, ...rest } = user; // eslint-disable-line
					req.session.save(() => {
						res.redirect('/projects');
					});
				});
			} else {
				res.status(400).json(info);
			}
		})(req, res, next);
	});
};
