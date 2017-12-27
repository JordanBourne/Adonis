const sdk = require('../../../sdk');
const DownloadProgram = sdk.programs.downloadProgram;

module.exports = function(req, res, next) {
	console.log(req.params);
	return next();
	// DownloadProgram.create({
	// 	filters: req.body.filters
	// }).execute((err, programs) => {
	// 	if(err) {
	// 		console.log(err);
	// 		return next(err);
	// 	}
	//
	// 	res.locals.output = {
	// 		programs: programs
	// 	};
	//
	// 	return next();
	// });
};
