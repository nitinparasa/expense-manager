// entry
// where to output the final bundled file
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    CSSExtract = new ExtractTextPlugin('app.css');
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public', 'dist'), // this should be an absolute path as this key cant contain "/".
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, 
            {
               test: /\.s?css$/,
               use: CSSExtract.extract({
                use:[
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

// loader - tells webpack what to do with a set of complex code
// Source Maps - efficient debugging - devtool
