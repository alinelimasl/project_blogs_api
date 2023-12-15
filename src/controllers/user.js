const jwt = require('jsonwebtoken');
const userService = require('../services/user');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser(displayName, email, password, image);
  if (user.message === 'User already registered') { 
    return res.status(409).json({ message: user.message }); 
  }
  if (user.message) return res.status(400).json({ message: user.message });
  const payload = {
    id: user.id,
    username: user.username,
    admin: false,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};