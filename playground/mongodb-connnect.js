// const MongoClient = require('mongodb').MongoClient;

 const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
      if(err){
        return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connnected tp MongoDB server');
      //create database and insert
      // db.collection('Todos').insertOne({
      //   text:'Something todo',
      //   completed: false
      // },(err,result)=>{
      //   if(err){
      //     return console.log('Unable to insert todo',err);
      //   }
      //   console.log(JSON.stringify(result.ops,undefined,2));
      // });
      //--
      // db.collection('Users').insertOne({
      //   name:'King Rowell Vidal',
      //   Age: 23,
      //   location:'Sitio baba Sapul calapan'
      // },(err,result)=>{
      //   if(err){
      //     return console.log('Unable to Insert Users',err);
      //   }
      //   console.log(result.ops[0]._id.getTimestamp());
      // });

       db.close();

});
