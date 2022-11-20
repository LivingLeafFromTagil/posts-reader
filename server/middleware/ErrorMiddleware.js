const ApiError = require('../error/ApiError');

module.exports = (error, req, res, next) => {
  if(error instanceof ApiError) {
    return res.status(error.status).json({
      message: error.message,
      status: error.status,
    });
  }
  else {
    return res.status(400).json({
      message: 'Unexpected error',
      status: 400,
    })
  }
}