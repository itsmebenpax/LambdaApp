const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const port = 9000

// server setup
app.use(cors());

// Parse middleware before handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/api', (req, res) => {
    console.log("server")
return res.send('Hello World!')})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))