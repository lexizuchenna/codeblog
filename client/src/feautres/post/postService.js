const axios = require("axios");

const url = "https://lexizcodeblog.herokuapp.com";

const getAllPosts = async (_) => {
  const response = await axios.get(`${url}/api/posts`);
  return response.data;
};

const getPostByCategory = async (category) => {
  const response = await axios.get(
    `${url}/api/posts/category?category=${category}`
  );

  return response.data;
};

const getSinglePost = async (linkText) => {
  const response = await axios.get(`${url}/api/posts/${linkText}`);
  return response.data;
};

const postService = {
  getAllPosts,
  getPostByCategory,
  getSinglePost,
};

export default postService;
