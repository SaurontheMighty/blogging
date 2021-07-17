const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    user: {
        type: mongoose.ObjectId
    },
    title: {
        type: String,
        required: [true, "This is a required field!"]
    },
    subtitle: {
        type: String,
        required: [true, "This is a required field!"]
    },
    body: {
        type: String,
        required: [true, "This is a required field!"]
    },
    image: {
        type: String
    }
}, { timestamps: true });

blogSchema.index({title: 'text', subtitle: 'text'});

// Model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;