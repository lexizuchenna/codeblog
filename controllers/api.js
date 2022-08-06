const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().lean();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

const getSinglePost = async (req, res) => {
  try {
    const post = await Post.find({ linkText: req.params.linkText });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

const getPostsByCategory = async (req, res) => {
  try {
    const posts = await Post.find({ category: req.query.category });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

const getPostsBySearch = async (req, res) => {};

module.exports = {
  getPosts,
  getPostsByCategory,
  getSinglePost,
  getPostsBySearch,
};
