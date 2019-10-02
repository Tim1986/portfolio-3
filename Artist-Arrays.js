var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("RoadTripDB");
  var myobj = [
      // objects here, separated by commas, not in array
      
      ];
  dbo.collection("").insertMany(myobj, function(err, res) { // update string to be collection name: cityState
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

