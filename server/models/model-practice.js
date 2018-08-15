//this file has no meaningfull data .it is just for reference

text: 'test1 String one',
completed: true,
completedAt: 123


var Todot1 = mongoose.model('Todot1' ,{
 text:{
 type: String,
 required: true,
 minlength: 5, 
 trim: true
},
completed:{
 type: Boolean
},
completedAt:{
 type: Number
}
});

var Todoobj = new Todot1({
text: 'aaaaa   ',
});
Todoobj.save().then((doc) => {
console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
	console.log('Unable to save todo',e);
}); 