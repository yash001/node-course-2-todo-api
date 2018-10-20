const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/*
var password = '123abc!';

bcrypt.genSalt(10,(err,salt) => {
	bcrypt.hash(password,salt,(err,hash) => {
		console.log(hash);
		//console.log("salt-",a);
	});
});*/

var hashedPassword = '$2a$10$pKbRavnzWr5h0jGWV/3qTOpRt.HCVzCMMJDaxlJkqyICUOwWWr7GW';

bcrypt.compare('1',hashedPassword,(err,res) => {
	 console.log(res);
});

//example for practice 

/*var data = {
	id: 10
}; 

var token = jwt.sign(data,'123abc');
console.log(token);

var decoded = jwt.verify(token ,'123abc'); 
console.log('decoded',decoded);
*/

//jwt.verify
/*var message = "I am user number 3";
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);
 

 var data = {
 	id: 4
 };
 var token = {
 	data,
 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
 }  


 token.data.id = 5;
 token.hash = SHA256(JSON.stringify(token.data)).toString();
  console.log(token.hash);

  
 var resultHash =  SHA256(JSON.stringify(token.data) + 'somesecret').toString();
  console.log(resultHash);
 if(resultHash === token.hash) {
 	console.log('Data was not changed');
 } else {
 	console.log('Data was changed. Do not trust!');
 } 	 
console.log("hi");*/