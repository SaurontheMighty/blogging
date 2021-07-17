const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogsController');

router.get('/', controller.getBlogs);
router.post('/', controller.createBlog);

router.get('/:id', controller.detailsBlog);
router.delete('/:id', controller.deleteBlog);

module.exports = router;