module.exports = function(req, res, next) {
    let output = {
        success: true
    };

    if(res.locals.output) {
        output.data = res.locals.output;
    }

    res.status(200).json(output);
    return next("route");
};