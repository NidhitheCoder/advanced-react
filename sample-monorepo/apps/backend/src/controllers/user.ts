const getUsers = (req, res, next) => {
  try {
    res.status(200).json({ msg: 'Users list', users: [], total: 0 });
  } catch (err) {
    next(err);
  }
};

const getUser = (req, res, next) => {
  try {
    res.status(200).json({ msg: ' single user list', user: {} });
  } catch (err) {
    next(err);
  }
};

export { getUser, getUsers };
