const handleAlerts = (req, res) => { 

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://193.106.55.102:23777/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("AllAlerts");

        dbo.collection("CurrentAlerts").find({}).toArray(function(err, result) {
          if (err) throw err;
          const filteredData = result.filter(alert => {
            let today = new Date();
            today.setHours(0,0,0,0);
            let alertDate = new Date(alert.time);
            alertDate.setHours(0,0,0,0);
            return alertDate >= today;
          })
          
          db.close();
          res.json(filteredData);
        });


      });

}

module.exports = {handleAlerts: handleAlerts};