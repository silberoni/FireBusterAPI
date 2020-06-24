const express = require ('express');
const cors = require ('cors');
//const {MongoClient} = require('mongodb');
const getAllAlerts = require('./controllers/getAllAlerts');
const postNewAlert = require('./controllers/postNewAlert');
const confirmAlert = require('./controllers/confirmAlert');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
    // const uri = "mongodb://administrator:Bb112233@193.106.55.102:23777/";
const uri = "mongodb://193.106.55.102:23777/";
//const client = new MongoClient(uri);
//client.connect();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://193.106.55.102:23777/";

 
// try {
//     // Connect to the MongoDB cluster
//     client.connect();

//     // Make the appropriate DB calls
//     listDatabases(client);

// } catch (e) {
//     console.error(e);
// } finally {
//     client.close();
// }

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("AllAlerts");
//     var myobj =  {
//         locationLAT: "32.736029",
//         locationLG: "35.058554",
//         severity: "High",
//         time: "20.06.20 12:00AM",
//         probability: "69%",
//       };
//     dbo.collection("CurrentAlerts").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       //db.close();
//     });

//     var query = { severity: "High" };
//     dbo.collection("CurrentAlerts").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

app.get('/getAllAlerts', (req, res) => { getAllAlerts.handleAlerts(req, res) })

app.post('/postNewAlert', (req, res) => { postNewAlert.saveNewAlert(req.body, res) })
app.post('/confirmAlert', (req, res) => { confirmAlert.confirmAlert(req.body, res) })
app.listen(3000, () => {
    console.log("app is running on port 3000");
})

