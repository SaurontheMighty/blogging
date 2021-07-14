const Blog = require('../models/blog');


const getBlogs = async (req, res) => {

    let blogs;

    if(req.query.id) {
        try {
            blogs = await Blog.find({ user: req.query.id });
        }
        catch{
            res.status(500);
            blogs = [];
        }
    }
    else if(req.query.title) {
        try {
            blogs = await Blog.find({$text: { $search: req.query.title }});

        } 
        catch {
            res.status(500);
            blogs = [];
        }
    }
    else {
        try {
            blogs = await Blog.find();
        }
        catch {
            res.status(500);
            blogs = [];
        }
    }

    let response = {
        blogs: blogs
    }
    res.json(response);
}

const createBlog = async (req, res) => {

    let result;
    console.log("!!!!!!!!!!!!!!!!!!!");
    console.log(req.body);
    
    try {
        const blog = new Blog(req.body);
        result = await blog.save();
    }
    catch {
        result = {};
        res.status(500);
    }

    res.json({ blog: result })
}

const detailsBlog = async (req, res) => {

    try {
        blog = await Blog.findById(req.params.id);
    }
    catch {
        blog = {}
        res.status(500);
    }

    let response = {
        blog: blog
    }
    
    res.json(response);
}

const deleteBlog = async (req, res) => {

    let response;
    
    try {
        response = await Blog.findByIdAndDelete(req.params.id);
    }
    catch {
        response = {};
        res.status(500);
    }

    res.json({ blog: response });
}

module.exports = {getBlogs, createBlog, detailsBlog, deleteBlog};