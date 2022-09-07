const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();


console.log( argv );
console.log('base: yargs', argv.base);


createFile(argv.base, argv.list, argv.final)
    .then(file => console.log(file))
    .catch(err => console.log(err));