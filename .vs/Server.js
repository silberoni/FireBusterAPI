const express = require ('express');
const cors = require ('cors');


const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const {MongoClient} = require('mongodb');
const uri = "mongodb://administrator:Bb112233@193.106.55.102:23777/test?retryWrites=true&w=majority";


app.listen(3000, () => {
    console.log("app is running on port 4000");
})
