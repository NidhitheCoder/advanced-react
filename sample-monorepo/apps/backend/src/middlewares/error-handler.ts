const errorHandler = (err, req, res, next) => {
  return res.status(400).json({ msg: 'Error happening' });
};

export default errorHandler;
