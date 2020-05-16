import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import talentData from './TALENT_DATA.json';

const PORT = 9090;

const app = express();

/////
const fs = require('fs');
app.locals.talent = require('./TALENT_DATA.json');
////

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/**
 * This is an Express route handler
 * https://expressjs.com/
*/
app.get('/', (req, res) => {
  res.send('This is some data from the server. Please read README.md for full instructions before beginning.');
});

app.get('/search', function(req, res) {
	console.log(req.query.value)
	console.log(req.query.type)
	let type = req.query.type;
	let value = req.query.value;
	let newArray = []

	switch (type) {
		case 'name':
			talentData.filter((data) => {
				if (data.name.toLocaleLowerCase().includes(req.query.value.toLocaleLowerCase())) {
					newArray.push(data)
						}
					}
				) 
			break;
		case 'username':
			talentData.filter((data) => {
				if (data.username === req.query.value) {
					newArray.push(data)
						}
					}
				) 
			break;
		case 'category':
			talentData.filter((data) => {
				if (data.category === req.query.value) {
					newArray.push(data)
						}
					}
				) 
			break;
					
		default:
			return null
			break;
	}

	newArray.sort()
	res.send(newArray);
  
  });

/**
* Implement a new endpoint HTTP GET /search that accepts a query, and returns a filtered list of talent based on that query.
* A user should be able to search by username, name, or category.
* Note: A list of Cameo talent is provided in TALENT_DATA.json
*/

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

app.listen(PORT);

console.log(`listening on: ${PORT}`);

// rl.question("Enter a query: ", (query) => {
//   console.log(search(talentData, query));
//   rl.close();

// var talent = search(talentData, query);

// app.get('/search', function(req, res) {
//   res.send(talent);

// });

// });




/////
// function search(source, name) {
// 	var results = [];
// 	var i;
// 	var entry;

// 	name = name.toUpperCase();
// 	for(i = 0; i < source.length; i++){
// 		entry = source[i];
// 		if(entry && entry.name && entry.name.toUpperCase().indexOf(name) !== -1){
// 			results.push(entry);
// 		} else if(entry && entry.username && entry.username.toUpperCase().indexOf(name) !== -1){
// 			results.push(entry);
// 		} else if(entry && entry.category && entry.category.toUpperCase().indexOf(name) !== -1){
// 			results.push(entry);
// 		}
// 	}

// 	return results;
// }
