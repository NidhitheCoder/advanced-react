import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong please try again',
  };

  return res.status(customError.statusCode).json({ msg: customError.message });
};

export default errorHandler;
