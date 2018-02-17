// entry
// where to output the final bundled file
const path = require('path');
console.log(__dirname);

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'), // this should be an absolute path as this key cant contain "/".
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
           test: /\.s?css$/,
           use: [
               'style-loader',
               'css-loader',
               'sass-loader'
           ],
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
};

// loader - tells webpack what to do with a set of complex code
// Source Maps - efficient debugging - devtool
