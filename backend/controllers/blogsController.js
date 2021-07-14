const Blog = require('../models/blog');


const getBlogs = (req, res, next) => {

    let blogs;

    if(req.query.id) {

        Blog.find({ user: req.query.id }, function(err, data) {
            if(err) {
                next(err);
            }
            else {
                res.json({ blogs: data });
            }
        });
    }
    else if(req.query.title) {

        Blog.find({$text: { $search: req.query.title }}, function (err, data) {
            if(err) {
                next(err);
            }
            else {
                res.json({ blogs: data });
            }
        });
    }
    else {

        Blog.find(function (err, data) {
            if(err) {
                next(err);
            }
            else {
                res.json({ blogs: data });
            }
        });
    }
}

const createBlog = (req, res, next) => {

    const blog = new Blog(req.body);
    blog.save(function (err, data) {

        if(err) {
            next(err);
        }
        else {
            res.json({ blog: data });
        }
    });
}

const detailsBlog = (req, res, next) => {

    Blog.findById(req.params.id, function (err, data) {

        if(err) {
            return next(err);
        }
        else {
            res.json({ blog: data });
        }
    });
}

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

module.exports = {getBlogs, createBlog, detailsBlog, deleteBlog};