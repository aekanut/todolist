const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();

app.use('/', express.static(path.resolve(_-dirname, 'assets')));

app.listen(13371 , () => {
    console.log("Server is running in port 3000...")
})