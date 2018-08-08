 const {MongoClient,ObjectID} = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
if (err) {
	return console.log('Unable to connect to MongoDB server');
}	
	console.log('connected to MongoDB server');
 	/*
	 db.collection('Todos').find({_id: new ObjectID('5b61c8b82086bc7812404a44')}).toArray().then((docs) => {
		console.log(JSON.stringify(docs,undefined,2))
	},(err) => {
		console.log('Unable to fetch todos');
	});*/

 	db.collection('Todos').findOneAndUpdate({
 	_id: new ObjectID('5b61c8b82086bc7812404a44')
 	}, {
 		$set: {
 			text: 'yash m'
 		},
 		$inc: {
 				age: 5
 		 }
 	   },
 	   
 			
 	    {
 	   returnOriginal: false
 	}).then((result) => {

 		console.log(result);
 		console.log("completed");

 	}); 
});
  