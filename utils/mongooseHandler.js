const ErrorHandler = require("./ErrorHandler");

const validatorHandler = err => {
    err.status = 400;
    err.message = Object.values(err.errors).map(item => item.message);
    return new ErrorHandler(err.message, err.status);
};

const castHandler = err => {
    err.status = 404;
    err.message = "Product Not Found";
    return new ErrorHandler(err.message, err.status);
};

module.exports = { validatorHandler, castHandler };
