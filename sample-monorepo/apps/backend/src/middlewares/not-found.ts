import { StatusCodes } from 'http-status-codes';

const notFound = (req: any, res: any) =>
  res.status(StatusCodes.NOT_FOUND).send('Route does not exist');

export default notFound;
