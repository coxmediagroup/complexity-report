let chalk = require('chalk'),
    plato = require('es6-plato'),
    argv = global.process.argv;

// Validate command.
if (!argv[2]) {
    console.log(chalk.red('Missing source path!\n'));
    console.log('%s node build.js %s path/to/dest', chalk.bgWhite.black('USAGE>'), chalk.yellow('path/to/source'));
    return;
} else if (!argv[3]) {
    console.log(chalk.red('Missing output path!\n'));
    console.log('%s node build.js path/to/source %s', chalk.bgWhite.black('USAGE>'), chalk.yellow('path/to/dest'));
    return;
}

// Run the build.
plato.inspect(argv[2], argv[3], {
    title: 'NP-Paid Complexity Report',
    eslint: require('./eslint.json')
});
