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
*/

Todo.findByIdAndRemove({
_id:'5b7c1990172619718b51fb34'
}).then((todo) => {
	console.log(todo);
});



	
