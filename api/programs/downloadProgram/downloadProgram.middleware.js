const sdk = require('../../../sdk');
const DownloadProgram = sdk.programs.downloadProgram;

module.exports = function(req, res, next) {
	DownloadProgram.create({
		filters: req.params.programName
	}).execute((err, program) => {
		if(err) {
			return next(err);
		}

		res.locals.output = {
			program: program
		};

		return next();
	});
};
