const confirmAlert = (req, res) => {
  var alertID = req.alert_ID;
  console.log(alertID);
  var MongoClient = require("mongodb").MongoClient;
  var ObjectID = require("mongodb").ObjectID;
  var url = "mongodb://193.106.55.102:23777/";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("AllAlerts");
    dbo
      .collection("CurrentAlerts")
      .updateOne(
        { _id: ObjectID(alertID) },
        { $set: { 'confirmed' : true } },
        function(err, result) {
            if (err) throw err;
            else res.send("Success");
            console.log(result.result.nModified);
            db.close();
          });
  });
};

module.exports = { confirmAlert: confirmAlert };
