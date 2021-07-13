const Blog = require('../models/blog');


const getBlogs = async (req, res) => {

    let blogs;

    if(req.query.id) {
        blogs = await Blog.find({ user: req.query.id });
    }
    else if(req.query.title) {
        await Blog.find({$text: { $search: req.query.title }});
    }
    else {
        blogs = await Blog.find();
    }

    let response = {
        blogs: blogs
    }
    res.json(response);
}

const createBlog = async (req, res) => {
    const blog = new Blog(req.body);
    const result = await blog.save();

    return result;
}

const detailsBlog = async (req, res) => {

    blog = await Blog.findById(req.params.id);

    let response = {
        blog: blog
    }
    
    res.json(response);
}

const deleteBlog = async (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
    .then(result => {
        return {
            blog: result
        };
    })
    .catch(e => {
        return {
            error: e
        }
    });
}

module.exports = {getBlogs, createBlog, detailsBlog}