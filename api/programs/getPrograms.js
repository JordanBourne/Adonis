const sdk = require('../../sdk');
const ListPrograms = sdk.programs.ListPrograms;

module.exports = function(req, res, next) {
	ListPrograms.create().execute((err, programs) {
		if(err) {
			return next(err);
		}

		res.locals.output = {
			programs: programs
		}

	    return next();
	});
};
