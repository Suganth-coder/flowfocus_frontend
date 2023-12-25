const path = require('path');

module.exports = [{
    entry: './js/src/index-obfuscated.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'js'),
    },
}, {
    entry: './js/src/common-obfuscated.js',
    output: {
        filename: 'common.js',
        path: path.resolve(__dirname, 'js'),
    },
}, {
    entry: './js/src/task_management-obfuscated.js',
    output: {
        filename: 'task_management.js',
        path: path.resolve(__dirname, 'js'),
    },
}];