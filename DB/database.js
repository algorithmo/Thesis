'use strict';

const DB = require('mongodb').MongoClient;


class  MongoDB
{

    constructor(url)
      {
          this.url = url;
          this.DB = DB;
      }

   Select(dbname,criterie={})
   {

     if(typeof criterie !== 'object'  )
     {
       console.log("the criterie needed to be  object type" );
       return false;
     }
     DB.connect(this.url,function(err,db){
       if(err)
         {
           console.log("ERROR: " + err);
           return false;
         }
       else
         {
            console.log("SUCCEESS to connect " );
              //here the main action

                    var collection = db.collection(dbname);
                    collection.find(criterie).toArray( (err, res) => {

                            if (err) console.log(err);
                            else if(res.length){
                              console.log(res);
                            }else{
                                console.log("NO match found..");
                            }
                              db.close();

                         });

               //end action
               console.log("Action Complate (find) ");
               return true;
           }
        });
   }


    Insert(dbname,data)
      {

          DB.connect(this.url,function(err,db){
            if(err)
              {
                console.log("ERROR: " + err);
                return false;
              }
            else
              {
                 console.log("SUCCEESS to connect " );
                   //here the main action

                         var collection = db.collection(dbname);
                         collection.insert(data, (err, res) => {

                                 if (err) console.log(err);
                                 else {
                                   console.log('%d records inserted', res.insertedCount);
                                   db.close();
                                 }
                              });

                    //end action
                    console.log("Action Complate (Insert) ");
                    return true;
                }
             });
       }

       Update(dbname,criterie={},action={})
       {
         if(typeof criterie !== 'object'  || typeof action !== 'object' )
         {
           console.log("the criterie and action needed to be  object type" );
           return false;
         }
         DB.connect(this.url,function(err,db){
           if(err)
             {
               console.log("ERROR: " + err);
               return false;
             }
           else
             {
                console.log("SUCCEESS to connect " );
                  //here the main action

                        var collection = db.collection(dbname);
                        collection.update(criterie,{$set:action}, (err, res) => {

                                if (err) console.log(err);
                                else {
                                  console.log('%d records updated', res.insertedCount);
                                  db.close();
                                }
                             });

                   //end action
                   console.log("Action Complate (Update) ");
                   return true;
               }
            });
       }


}


/*var url = 'mongodb://localhost:27017/';
const database = new MongoDB(url);*/
exports.db  = MongoDB;
