var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3001,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
