const path = require('path');

module.exports = [{
        entry: ['./js/obs/index.js', './js/obs/getstarted.js', './js/obs/feedback.js'],
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'js/dist'),
        },
    },
    {
        entry: './js/obs/common.js',
        output: {
            filename: 'common.js',
            path: path.resolve(__dirname, 'js/dist'),
        },
    },
    {
        entry: './js/obs/task_management.js',
        output: {
            filename: 'b1.js',
            path: path.resolve(__dirname, 'js/dist'),
        },
    }

];