const register = async (req, res, next) => {
  try {
    res.status(201).json({ msg: 'user registered' });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    res.status(200).json({ msg: 'Login successful' });
  } catch (err) {
    next(err);
  }
};

export { login, register };
