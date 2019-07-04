const express = require('express')
const app = express()
const port = 1337

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => res.send('hit /'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));