const postService = require('../services/post');

// const getPost = async (req, res) => {
//   const { id } = res.locals.user;
//   const { title, content, categoryIds } = req.body;
//   const post = await postService.createPost({ title, content, categoryIds, userId: id });
//   if (post.message) return res.status(400).json({ message: post.message });
//   return res.status(201).json(post);
// };
const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();
  return res.status(200).json(posts);
};  

module.exports = {
  // getPost,
  getAllPosts,
};