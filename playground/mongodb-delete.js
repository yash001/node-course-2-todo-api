 const {MongoClient,ObjectID} = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
if (err) {
	return console.log('Unable to connect to MongoDB server');
}	
	console.log('connected to MongoDB server');
 	
 /*	db.collection('Users').deleteMany({location:'virar'}).then((result) => {
 		console.log(result);
 	});
 	console.log('deleted');
 	*/
	//db.close();

 /*	db.collection('Users').deleteOne({location:'new york'}).then((result) => {
 		console.log(result);
 	});*/
/*
db.collection('Users').findOneAndDelete({text:'Eat lunch'}).then((result) => {
 		console.log(result);
 	});
*/
db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b5f66808cb6fd2788c7b70d")}).then((result) => {
 		console.log(JSON.stringify(result,undefined,2));
 	});
});
  