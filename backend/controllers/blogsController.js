const Blog = require('../models/blog');

// GET /api/blogs
const getBlogs = (req, res, next) => {

    if(req.query.id) { // Search by Author
        Blog.find({ user: req.query.id }, function(err, data) {
            if(err) {
                next(err);
            }
            else {
                return res.json({ blogs: data });
            }
        });
    }
    else if(req.query.title) { // Search by Title & Subtitle
        Blog.find({$text: { $search: req.query.title }}, function (err, data) {
            if(err) {
                next(err);
            }
            else {
                return res.json({ blogs: data });
            }
        });
    }
    else { // Get all blogs
        Blog.find(function (err, data) { 
            if(err) {
                next(err);
            }
            else {
                return res.json({ blogs: data });
            }
        });
    }
}

// POST /api/blogs
const createBlog = (req, res, next) => {

    // Validation
    if(req.body.body.length <= 1) { // We don't want empty blogs.
        throw new Error('Body of Blog is too short');
    }

    const blog = new Blog(req.body);
    blog.save(function (err, data) {
        if(err) {
            res.status(500);
            return res.json({ error: err });
        }
        else {
            return res.json({ blog: data });
        }
    });
}

// GET /api/blogs/:id
const detailsBlog = (req, res, next) => {

    Blog.findById(req.params.id, function (err, data) {
        if(err) {
            res.status(404);
            return res.json({ error: "Blog does not exist." });
        }
        else {
            return res.json({ blog: data });
        }
    });
}

// PUT /api/blogs/:id
const editBlog = (req, res, next) => {

    Blog.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if(err) {
            res.status(500);
            return res.json({ error: err });
        }
        else {
            return res.json({ blog: data });
        }
    })
}

// DELETE /api/blogs/:id
const deleteBlog = async (req, res, next) => {

    Blog.findByIdAndDelete(req.params.id, function(err, data) {
        if(err) {
            next(err);
        }
        else {
            res.json({ blog: data });
        }
    });
}

module.exports = {
    getBlogs, 
    createBlog, 
    detailsBlog, 
    editBlog,
    deleteBlog
};