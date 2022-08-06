const express = require("express");
const { getPosts, getPostsByCategory, getSinglePost } = require("../controllers/api");

const router = express.Router();

router.get("/posts", getPosts);
router.get(`/posts/category`, getPostsByCategory);
router.get(`/posts/:linkText`, getSinglePost);

module.exports = router;
