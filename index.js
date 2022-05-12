const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 7000;



app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('All set for server')
})
app.listen(port, () => {
    console.log("This is for lestening", port)
})
