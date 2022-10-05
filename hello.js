// custom modules
// review 
// modules are like seperate methods that we can export functions to other 
// modules and files
const message = 'Hello World!';

// to export a function within a module, you should make it 
// first exportable
exports.sayHello = () => {
    console.log(message)
}