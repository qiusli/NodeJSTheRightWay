/**
 * Created by qiushili on 3/9/16.
 */
const fs = require('fs');
fs.watch('target.txt', function() {
	console.log("File 'target.txt' just changed!");
});
console.log("Now watching taget.txt for changes");