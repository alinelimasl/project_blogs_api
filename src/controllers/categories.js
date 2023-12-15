const categoriesServices = require('../services/categories');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesServices.createCategory(name);
  if (category.message) return res.status(400).json({ message: category.message });
  return res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoriesServices.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};