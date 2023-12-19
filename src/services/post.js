const { BlogPost, Category, User } = require('../models');

// const createPost = async ({ title, content, categoryIds, userId }) => {
//   if (!title || !content || !categoryIds) {
//     return { message: 'Some required fields are missing' };
//   }
//   const threatCategoryId = categoryIds.map((categoryId) => Category.findByPk(categoryId));

//   const categoryIdFind = await Promise.all(threatCategoryId);

//   if (categoryIdFind.includes(null)) {
//     return { message: 'one or more "categoryIds" not found' };
//   }
  
//   const post = await BlogPost.create({ title, content, userId });
//   const postId = post.id;
//   const categoriesLists = categoryIds
//     .map((categoryId) => PostCategory.create({ postId, categoryId }));
//   await Promise.all(categoriesLists);
//   return post;
// };
const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    // raw: true, 
  });
  return posts;
};

module.exports = {
  // createPost,
  getAllPosts,
};
