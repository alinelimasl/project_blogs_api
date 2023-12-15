const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) {
    return { message: '"name" is required' };
  }

  const category = await Category.create({ name });
  return category;
};

module.exports = {
  createCategory,
};