const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base of the multiplication table'
        },
        'l': {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe: 'Show the multiplication table in the console'
        },
        'f': {
            alias: 'final',
            type: 'number',
            default: 10,
            describe: 'Show the multiplication table in the console'
        }
    })
    .check( (argv, options) => {
        if ( isNaN( argv.base ) ) {
            throw 'The base has to be a number';
        }
        if ( isNaN( argv.final ) ) {
            throw 'The limit has to be a number';
        }
        return true;
    })
    .argv;

module.exports = argv;