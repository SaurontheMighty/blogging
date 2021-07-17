const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => {
        console.log("DB Connected");
        app.listen(process.env.PORT || 3000);
    })
    .catch((e) => console.log(e));