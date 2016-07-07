var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: BUILD_DIR,
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test : /\.js?$/,
                exclude: /(node_modules)/,
                loader : 'babel'
            },
            {
                test: /plugin\.css$/,
                loaders: [
                    'style', 'css',
                ],
            },
        ],
    },
};