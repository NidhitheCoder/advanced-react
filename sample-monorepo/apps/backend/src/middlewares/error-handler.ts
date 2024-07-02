import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface CustomError extends Error {
  statusCode: StatusCodes;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong please try again',
  };

  return res.status(customError.statusCode).json({ msg: customError.message });
};

export default errorHandler;
