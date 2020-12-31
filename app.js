const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/Todo";
const list = require('./model/todo')
const todoRoutes = require('./routes/todos')

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todos', todoRoutes);


app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});