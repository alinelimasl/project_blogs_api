const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controllers/user');

const userRoutes = Router();

userRoutes.post('/user', userController.createUser);

userRoutes.use(authMiddleware);

module.exports = userRoutes;
