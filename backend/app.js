const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const blogRoutes = require('./api/blogRoutes');

// create an instance of an express app
const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'));
app.use('/api/blogs/', blogRoutes);

app.use('*', (req, res) => {
    res.status(404).json({ error: "Page not found." });
});

module.exports = app;