const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 1337;

mongoose.connect('mongodb://localhost:27017/galleries');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => res.send('hit /'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))