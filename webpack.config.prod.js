const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['es2015', 'react', 'stage-2'],
//           plugins: ['transform-decorators-legacy']
//         }
//       }
//     ]
//   },
 module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
  plugins: [
    new UglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, 'public/cached_uglify'),
      debug: false,
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      },
      compressor: {
          warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};