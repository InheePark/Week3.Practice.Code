const connect = require('connect');
// we are importing module to our entry point
const app = connect();
// connect to the server using connect module

function logger(req, res, next){
    console.log(req.method, req.url);

    next();
}

function helloWorld(req, res, next){
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
}

function goodByeWorld(req, res, next){
    res.setHeader('Content-type', 'text/plain');
    res.end('Goodbye World');
}

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodByeWorld);
app.listen(3000);
// connecting to the server port 3000
console.log('Server is running at http://localhost:3000/');