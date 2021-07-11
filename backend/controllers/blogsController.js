const blogsDAO = require('../DAO/blogsDAO');

const getBlogs = async (req, res) => {

    let blogs;

    if(req.query.id) {
        blogs = await blogsDAO.searchBlogs("id", req.query.id);
    }
    else if(req.query.title) {
        blogs = await blogsDAO.searchBlogs("title", req.query.title);
    }
    else {
        blogs = await blogsDAO.getBlogs();
    }

    let response = {
        blogs: blogs
    }
    res.json(response);
}

const createBlog = async (req, res) => {
    return await blogsDAO.saveBlog(req);
}

const detailsBlog = async (req, res) => {

    blog = await blogsDAO.getBlogDetails(req.params.id);

    let response = {
        blog: blog
    }
    
    res.json(response);
}

module.exports = {getBlogs, createBlog, detailsBlog}