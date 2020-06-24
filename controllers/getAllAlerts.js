const handleAlerts = (req, res) => { 

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://193.106.55.102:23777/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("AllAlerts");

        dbo.collection("CurrentAlerts").find({}).toArray(function(err, result) {
          if (err) throw err;
         
          //console.log('year', test,  month, year, day, hour, min, 0)

          //let test2 = new Date(Number(test.substring(6,8)) + 2000, Number(test.substring(3,5)), Number(test.substring(0,2)), Number(test.substring(9,11)), Number(test.substring(11,13)),0,0);
          //test2 = new Date(2020,06,12,13,40,0,0)
          
          //20.06.20 12:00AM
          //console.log('today' ,today);
          

          //var today = new Date();
          //console.log(today);
         // console.log(result[0].time);
//          console.log(today > today2);
          const filteredData = result.filter(alert => {
            let today = new Date();
            today = new Date(today.getFullYear(),today.getMonth(),today.getDate()); 
            let alertDate = new Date(alert.time.getFullYear(),alert.time.getMonth(),alert.time.getDate());
            return alertDate >= today;
          })
          
          db.close();
          res.json(filteredData);
        });


      });

}

module.exports = {handleAlerts: handleAlerts};