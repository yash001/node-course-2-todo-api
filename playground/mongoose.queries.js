const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 

//console.log('hey');
//var id = '5b77cb52172619718b51db3f';

/*if (!ObjectID.isValid(id)){
	console.log('ID not valid');
}*,/

/*Todo.find({
	_id: id  
}).then((todos) => {
	console.log('Todos',todos);
});

Todo.findOne({
	_id: id  
}).then((todo) => {
	console.log('Todo',todo);
});*/


// find by id

Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('Id not found'); 
	}
	console.log('Todo By Id',todo);
}).catch((e) => console.log(e));


// for users collection

//var id = '5b77cb52172619718b51db3f';
User.findById('5b6b035a6285080904061931').then((user) => {
	if(!user) {
		return console.log('Unable to find user'); 
	}
	console.log(JSON.stringify(user,undefined,2));
}, (e) => {
	console.log(e);
});
	
