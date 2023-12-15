const { Category, BlogPost } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  if (!title || !content || !categoryIds) {
    return { message: 'Some required fields are missing' };
  }
  const findCategoryId = await Category.findOne({ where: { id: categoryIds } });
  if (!findCategoryId) {
    return { message: 'one or more "categoryIds" not found' };
  }
  const post = await BlogPost.create({ title, content, categoryIds, userId });
  return post;
};

module.exports = {
  createPost,
};