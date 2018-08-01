
//const MongoClient = require('mongodb').MongoClient;

 /*
 getting objectID out of mongoclient 
 const {MongoClient,ObjectID} = require('mongodb');
 var obj =  new ObjectID();
 console.log(obj);
 */
 const {MongoClient,ObjectID} = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
if (err) {
	return console.log('Unable to connect to MongoDB server');
}
    console.log('connected to MongoDB server');


 /*  
 	db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
    },(err,result) => {
		if(err) {
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));    	
		console.log('breakpoint');    	
		
    });
   */ 
	db.collection('Users').insertOne({
	  
    name: 'Something to do1',
    age: false,
    location: 'new york'
	},(err,result) => {
			if(err) {
				return console.log('Unable to insert todo',err);
			}
			console.log(JSON.stringify(result.ops,undefined,2));
			
			//console.log(result.ops[0]._id.getTimestamp());

	});	

	

     db.close(); 
  
      

});
  


/*
--another way of doing it
  const { MongoClient } = require("mongodb");i
const uri = 'mongodb://localhost:27017';  // mongodb://localhost - will fail

(async function() {
  try {

    const client = await MongoClient.connect(uri,{ useNewUrlParser: true });
    // ... anything

    client.close();
  } catch(e) {
    console.error(e)
  }

})()

*/