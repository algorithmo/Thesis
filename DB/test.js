
var unamepass  = process.env.MONGODB_USER +':'+ process.env.MONGODB_PASSWORD + '@';
var url        = 'mongodb://'+unamepass+'172.30.103.123:27017/nodejs-db';

//creating instance of MongoDB class
var mongoClass = require('./database').db;
var mongodb    = new  mongoClass(url);

const fs = require('fs');


var data = [
  {
     id:11111,
     name:'moti',
     last:'gad',
     rating:7.2,
     skills: { js:3.3 ,html:5.0,css:6,py:8}

  },
  {
     id:11112,
     name:'sasson',
     last:'jibli',
     rating:4.2,
     skills: { js:3.3 ,html:5.0,css:6}

  },
  {
     id:11113,
     name:'matan',
     last:'avra',
     rating:1.2,
     skills: { rb:3.4 ,html:5.0,css:6,py:8,java:8.0}

  }
]





/*fs.readFile('./users.json' , 'utf8' ,(err,data) =>{
  if(err) console.log(err);
  else{
    data = JSON.parse(data);
    mongodb.Insert('users2',data);

  }
});*/

mongodb.Insert('users2',data);
mongodb.Select('users2',{rating: {$gt: 4.0}});
