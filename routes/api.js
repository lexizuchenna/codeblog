const express = require("express");
const { getPosts, getPostsByCategory, getSinglePost, getPostsBySearch } = require("../controllers/api");

const router = express.Router();

router.get("/posts", getPosts);
router.get(`/posts/category`, getPostsByCategory);
router.get(`/posts/:linkText`, getSinglePost);
router.get(`/posts/search`, getSinglePost);

module.exports = router;
