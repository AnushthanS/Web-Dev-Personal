const {MongoClient} = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db("shopDB");
        const products = database.collection("products");
        
        // Query for a product with a id 2
        const query = {id: 2};
        const product = await products.findOne({id: 4});
        await products.insertOne({id: 4, name: "Glue", price: 2.0});
        console.log(product);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(err => console.err(err));