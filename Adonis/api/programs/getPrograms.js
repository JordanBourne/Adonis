module.exports = function(req, res, next) {
	res.locals.output = {
		message: 'Hello Werld'
	}
	
    return next();
};