/**
 * Created by USER on 22/11/16.
 */

const DB = require('mongodb').MongoClient;
var fs = require('fs');


var url = 'mongodb://motkeg:SqFkliuhut3KEBve@172.30.103.123:27017/nodejs-db';


//connect to DB with no Auth
function Connect(url){
DB.connect(url,(err,db) =>{
    if (err){
        console.log(err);

    }else{
        console.log("Connect succuss to: "+ url);
        var collection = db.collection('users');

        fs.readFile('./users.json', 'utf8',  (err, data) => {
            if (err)  console.log(err);
            else {
                console.log('read from file .json Success');
                var json = JSON.parse(data);

                collection.insert(json, (err, res) => {

                    if (err){
                      console.log(err);
                      return false;
                    }
                    else {
                          console.log('%d records inserted', res.insertedCount);
                          db.close();
                          return true;
                       }
                    });
            }
        });

    }
  });

}

Connect(url);
