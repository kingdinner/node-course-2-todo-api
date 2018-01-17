// const MongoClient = require('mongodb').MongoClient;

 const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 const todosdb = db.db('TodoApp');
      if(err){
        return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connnected tp MongoDB server');
     // deletetomany
     // db.collection('Todos').deleteMany({text:'Each Lunch'}).then((result) =>{
    //   console.log('result');
     // });
      //deletetoone
        // db.collection('Todos').deleteOne({text:'Each Lunch'}).then((result) =>{
        //deleteand find
         // todosdb.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        //   console.log('result');
        // });

        // db.collection('Users').deleteMany({name:'King'});

        todosdb.collection('Users').findOneAndDelete({
          _id: new ObjectId("5a5ecbec665c9524a4934357")
        }).then((results)=>{
          console.log(JSON.stringify(results,undefined,2));
        });

       // db.close();

});
