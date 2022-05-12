const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 7000;

// middleware
app.use(cors());
app.use(express.json());

// connection

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.18txb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const truckCollection = client.db('truckRevonditore').collection('product');

        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = truckCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        })
    }

    finally {

    }
}
run().catch(console.dir)



// api for root
app.get('/', (req, res) => {
    res.send('All set for server')
})
app.listen(port, () => {
    console.log("This is for lestening", port)
})
