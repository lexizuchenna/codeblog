const Post = require("../models/Post");

const getPosts = async (req, res) => {
  const posts = await Post.find().lean();
  res.status(200).json(posts);
};

const getSinglePost = async (req, res) => {
  const post = await Post.find({ linkText: req.params.linkText });
  res.status(200).json(post);
};

const getPostsByCategory = async (req, res) => {
  const posts = await Post.find({ category: req.query.category });
  res.status(200).json(posts);
}; 

module.exports = {
  getPosts,
  getPostsByCategory,
  getSinglePost,
};
