const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const postController = require('../controllers/post');

const postRoutes = Router();
postRoutes.get('/', authMiddleware, postController.getAllPosts);
// postRoutes.post('/', authMiddleware, postController.getPost);

module.exports = postRoutes;