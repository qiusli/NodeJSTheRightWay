/**
 * Created by qiushili on 3/10/16.
 */
const fs = require('fs');
fs.readFile('target.txt', function(err, data) {
	if(err) {
		throw err;
	}
	console.log(data.toString());
});