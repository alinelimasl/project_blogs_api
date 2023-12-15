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

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);  
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};