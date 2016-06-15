var webpack = require('webpack');
var path = require('path');

var config = {
  // entry: ['webpack-hot-middleware/client', './src/index.tsx'],
  entry: './src/index.tsx',
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loaders: ['babel']
    }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel', 'ts-loader', 'react'],
      include: './src',
      exclude: [
        /typings/,
        /node_modules/
      ]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: [path.resolve('./src')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};

module.exports = config;