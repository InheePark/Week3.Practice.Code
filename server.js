// the main entry point of node.js
// this file will be used by users to invoke exported modules from 

// in order to import from other modules to entry point, 
// we use require('path'), then we will be able to use the modules
// similar to import keyword in custom module
const hello = require('./hello');

// hello.sayHello(); // we can use the exportable function

// node js core modules
// http server
const http = require('http');

// creating a http server
// req -> the request variable (passes on the request)
// res -> the response of the server
http.createServer((req, res) => {
    // the res display code 
    // we can specify how the return is displayed in the server
    // 200 -> all is ok
    res.writeHead(200, {
        'Content-Type': 'text/plain'
        // content type of plain text
    });
    res.write('this is a response from the server!! \n\n');
    // res.write -> writing (outputing) to the server
    res.end('ending server');
    // res.end -> ending the server
}).listen(3000); // we specify the port number

console.log('Server running at http://localhost:3000/');