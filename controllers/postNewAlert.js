const saveNewAlert = (req, res) => {
  var newAlert = req;
  newAlert.time = new Date();
  newAlert.probability = 'Reported'
  console.log(newAlert);

  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://193.106.55.102:23777/";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("AllAlerts");

    dbo.collection("CurrentAlerts").insertOne(newAlert, function (err, result) {
      if (err) res.send("Error");
      else res.send("Success");
    });

    db.close();
  });
};

module.exports = { saveNewAlert: saveNewAlert };
