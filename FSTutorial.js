var fs = require("fs");

// Asynchronous - Opening File
console.log("opening file!");
fs.open('input.txt', 'r+', function(err, fd) {
if (err) {
	return console.error(err);
}
console.log("File open successfully");	
});

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
