const Blog = require('../models/blog');

const getBlogs = async () => {
    const response = await Blog.find();

    return response;
}

const searchBlogs = async (param, query) => {

    let response;

    if(param === "id") {
        response = await Blog.find({ user: query });
    }
    else if (param == "title") {
        response = await Blog.find({$text: { $search: query }});
    }

    return response;
}

const saveBlog = async (req) => {

    console.log(req);

    const blog = new Blog(req.body);
    const result = await blog.save();

    return result;
}

const getBlogDetails = async (id) => {
    const result = await Blog.findById(id);

    return result;
}

const deleteBlog = async (id) => {

    Blog.findByIdAndDelete(id)
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

module.exports = { getBlogs, searchBlogs, deleteBlog, getBlogDetails, saveBlog };