const path = require('path'),
    webpack = require('webpack'),
    prod = process.argv.indexOf('--mode=production') !== -1;

let BASE_API_URL, COOKIE_DOMAIN, PROD;

// Setting Production, Development ENV
if (prod) {
    BASE_API_URL = "https://flowfocus.io:8080/";
    COOKIE_DOMAIN = "flowfocus.io";
    PROD = true;

} else {
    BASE_API_URL = "http://localhost:8181/";
    COOKIE_DOMAIN = "localhost";
    PROD = false;

}

module.exports = [{
        entry: ['./js/obfus/index.js', './js/obfus/getstarted.js', './js/obfus/feedback.js'],
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'js/dist'),
        },
        plugins: [new webpack.DefinePlugin({
            BASE_URL: JSON.stringify(BASE_API_URL),
            COOKIE_DOMAIN_NAME: JSON.stringify(COOKIE_DOMAIN),
            PROD: PROD
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
        plugins: [new webpack.DefinePlugin({
            BASE_URL: JSON.stringify("http://localhost:8181/"),
            COOKIE_DOMAIN_NAME: JSON.stringify("localhost")
        })]
    },

];