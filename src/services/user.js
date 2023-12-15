const { User } = require('../models');

const validateEmail = (email) => {
  const emailPattern = /[^@]+@[^@]+\.[^@]+/;
  return email && emailPattern.test(email);
};

const createUser = async (displayName, email, password, image) => {
  if (displayName.length < 8) {
    return { message: '"displayName" length must be at least 8 characters long' };
  }
  if (!validateEmail(email)) {
    return { message: '"email" must be a valid email' };
  }
  if (password.length < 6) {
    return { message: '"password" length must be at least 6 characters long' };
  }
  const existingEmail = await User.findOne({ where: { email } });
  if (existingEmail) {
    return { message: 'User already registered' };
  }

  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  createUser,
  getAllUsers,
};