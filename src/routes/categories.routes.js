const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const categoriesController = require('../controllers/categories');

const categoriesRoutes = Router();

categoriesRoutes.get('/', authMiddleware, categoriesController.getAllCategories);
categoriesRoutes.post('/', authMiddleware, categoriesController.createCategory);

module.exports = categoriesRoutes;