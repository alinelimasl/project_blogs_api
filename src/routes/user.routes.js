const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controllers/user');

const userRoutes = Router();

userRoutes.post('/', userController.createUser);

userRoutes.use(authMiddleware);
userRoutes.get('/', userController.getAllUsers);

module.exports = userRoutes;
