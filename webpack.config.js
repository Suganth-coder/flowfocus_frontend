const path = require('path');

module.exports = [{
    entry: './js/src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'js'),
    },
}, {
    entry: './js/src/common.js',
    output: {
        filename: 'common.js',
        path: path.resolve(__dirname, 'js'),
    },
}];