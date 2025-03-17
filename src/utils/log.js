module.exports = function log(req, res, next) {
    console.log(`${Date().toString()}: "${req.method}" at ${req.path}`);
    next();
}
