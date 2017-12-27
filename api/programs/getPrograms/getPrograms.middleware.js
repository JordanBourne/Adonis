const sdk = require('../../sdk');
const ListPrograms = sdk.programs.listPrograms;

module.exports = function(req, res, next) {
	ListPrograms.create({
		filters: req.body.filters
	}).execute((err, programs) => {
		if(err) {
			console.log(err);
			return next(err);
		}

		res.locals.output = {
			programs: programs
		};

		return next();
	});
};
