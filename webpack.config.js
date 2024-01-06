const path = require('path');
const webpack = require('webpack');

module.exports = [{
        entry: ['./js/obfus/index.js', './js/obfus/getstarted.js', './js/obfus/feedback.js'],
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'js/dist'),
        },
        plugins: [new webpack.DefinePlugin({
            BASE_URL: JSON.stringify("https://flowfocus.io:8080/")
        })]
    },
    {
        entry: './js/obfus/common.js',
        output: {
            filename: 'common.js',
            path: path.resolve(__dirname, 'js/dist'),
        }
    },
    {
        entry: './js/obfus/task_management.js',
        output: {
            filename: 'b1.js',
            path: path.resolve(__dirname, 'js/dist'),
        },
    },

];